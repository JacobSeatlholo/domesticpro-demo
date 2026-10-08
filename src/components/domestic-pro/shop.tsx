"use client";

import Image from "next/image";
import { useSyncExternalStore, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Plus,
  Minus,
  X,
  Star,
  Leaf,
  PawPrint,
  Users,
  Package,
  Truck,
  ChevronRight,
  Check,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PRODUCTS, PRODUCT_CATEGORIES, type Product, type ProductCategory } from "@/lib/products";
import { useI18n } from "@/lib/i18n-context";
import { toast } from "sonner";

// --- Cart store (in-memory, session-only) ---
interface CartItem {
  product: Product;
  qty: number;
}

let cartItems: CartItem[] = [];
const cartListeners = new Set<() => void>();

function subscribeCart(cb: () => void) {
  cartListeners.add(cb);
  return () => cartListeners.delete(cb);
}

function getCartSnapshot() {
  return cartItems;
}

// SSR snapshot — empty cart on the server (stable reference to avoid infinite loop)
const EMPTY_CART: CartItem[] = [];
function getCartServerSnapshot() {
  return EMPTY_CART;
}

function notifyCart() {
  cartListeners.forEach((cb) => cb());
}

function addToCart(p: Product) {
  const existing = cartItems.find((i) => i.product.id === p.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cartItems = [...cartItems, { product: p, qty: 1 }];
  }
  notifyCart();
}

function removeFromCart(id: string) {
  cartItems = cartItems.filter((i) => i.product.id !== id);
  notifyCart();
}

function changeQty(id: string, delta: number) {
  cartItems = cartItems
    .map((i) =>
      i.product.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i
    )
    .filter((i) => i.qty > 0);
  notifyCart();
}

function useCart() {
  const items = useSyncExternalStore(subscribeCart, getCartSnapshot, getCartServerSnapshot);
  return {
    items,
    count: items.reduce((n, i) => n + i.qty, 0),
    total: items.reduce((n, i) => n + i.qty * (i.product.salePrice ?? i.product.price), 0),
  };
}

export function Shop() {
  const { t } = useI18n();
  const [activeCat, setActiveCat] = useState<"all" | ProductCategory>("all");
  const [cartOpen, setCartOpen] = useState(false);

  const cart = useCart();

  const featured = useMemo(() => PRODUCTS.find((p) => p.id === "dps-combo")!, []);
  const filtered = useMemo(
    () => (activeCat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCat)),
    [activeCat]
  );

  const handleAdd = (p: Product) => {
    addToCart(p);
    toast.success(`${p.name} — ${t.shopAddedToCart}`);
  };

  const handleRemove = (id: string) => {
    const p = cartItems.find((i) => i.product.id === id)?.product;
    removeFromCart(id);
    if (p) toast.message(`${p.name} — ${t.shopRemovedFromCart}`);
  };

  return (
    <section id="shop" className="bg-white py-14 sm:py-16 scroll-mt-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="leaf-dot text-xs font-bold uppercase tracking-wider text-emerald-700">
            {t.shopEyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {t.shopTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.shopLead}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-emerald-700">
            <span className="inline-flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5" aria-hidden />
              {t.shopFreeDelivery}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Leaf className="h-3.5 w-3.5" aria-hidden />
              {t.shopZAAware}
            </span>
          </div>
        </div>

        {/* Featured combo */}
        <FeaturedCombo product={featured} onAdd={handleAdd} />

        {/* Category filter */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <ToggleGroup
            type="single"
            value={activeCat}
            onValueChange={(v) => setActiveCat((v as "all" | ProductCategory) || "all")}
            variant="outline"
            className="flex-wrap justify-center"
          >
            {PRODUCT_CATEGORIES.map((c) => (
              <ToggleGroupItem
                key={c.id}
                value={c.id}
                className="border-lime-200 data-[state=on]:bg-[#80cc28] data-[state=on]:text-emerald-950 data-[state=on]:border-[#80cc28]"
              >
                {t[c.labelKey]}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Button
            variant="outline"
            onClick={() => setCartOpen(true)}
            className="relative border-lime-200 bg-lime-50 text-emerald-800 hover:bg-lime-100"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden />
            {t.shopCart}
            {cart.count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#80cc28] px-1 text-[10px] font-bold text-emerald-950 shadow-sm">
                {cart.count}
              </span>
            )}
          </Button>
        </div>

        {/* Product grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} onAdd={() => handleAdd(p)} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://domesticpro.co.za/shop-dps/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden />
            {t.shopBrowseAll}
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>

      {/* Cart sheet */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="flex w-full flex-col border-lime-100 sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-emerald-800">
              <ShoppingCart className="h-5 w-5" aria-hidden />
              {t.shopCart}
            </SheetTitle>
            <SheetDescription>
              {cart.count > 0
                ? `${cart.count} ${t.shopItems}`
                : t.shopCartEmpty}
            </SheetDescription>
          </SheetHeader>

          {cart.count === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-lime-50 text-emerald-600">
                <ShoppingBag className="h-8 w-8" aria-hidden />
              </div>
              <p className="text-sm text-slate-500">{t.shopCartEmpty}</p>
              <Button
                variant="outline"
                onClick={() => setCartOpen(false)}
                className="border-lime-200 text-emerald-700 hover:bg-lime-50"
              >
                {t.shopContinueShopping}
              </Button>
            </div>
          ) : (
            <>
              <div className="scroll-thin -mx-6 flex-1 overflow-y-auto px-6">
                <ul className="space-y-3">
                  <AnimatePresence initial={false}>
                    {cart.items.map((item) => (
                      <motion.li
                        key={item.product.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className="flex gap-3 rounded-lg border border-lime-100 bg-lime-50/30 p-2.5"
                      >
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-lime-100">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            sizes="64px"
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-semibold leading-tight text-slate-800">
                              {item.product.name}
                            </p>
                            <button
                              onClick={() => handleRemove(item.product.id)}
                              className="text-slate-400 hover:text-rose-500"
                              aria-label={`${t.shopRemove} — ${item.product.name}`}
                            >
                              <X className="h-4 w-4" aria-hidden />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            {item.product.size}
                          </p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => changeQty(item.product.id, -1)}
                                className="grid h-7 w-7 place-items-center rounded-md border border-lime-200 bg-white text-emerald-700 hover:bg-lime-50"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3.5 w-3.5" aria-hidden />
                              </button>
                              <span className="w-7 text-center text-sm font-semibold text-slate-800">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => changeQty(item.product.id, 1)}
                                className="grid h-7 w-7 place-items-center rounded-md border border-lime-200 bg-white text-emerald-700 hover:bg-lime-50"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3.5 w-3.5" aria-hidden />
                              </button>
                            </div>
                            <span className="text-sm font-bold text-emerald-800">
                              R{(item.qty * (item.product.salePrice ?? item.product.price)).toLocaleString("en-ZA", { minimumFractionDigits: 2 })}
                            </span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>

              <SheetFooter className="flex-col items-stretch gap-3">
                <Separator className="bg-lime-100" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    {t.shopCartTotal}
                  </span>
                  <span className="text-2xl font-extrabold text-emerald-800">
                    R{cart.total.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <a
                  href="https://domesticpro.co.za/shop-dps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#80cc28] px-4 text-sm font-bold text-emerald-950 shadow-sm transition-colors hover:bg-[#6fb81e]"
                >
                  <Check className="h-4 w-4" aria-hidden />
                  {t.shopCartCheckout}
                </a>
                <p className="text-center text-[11px] text-slate-500">
                  {t.shopFreeDelivery}
                </p>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}

function FeaturedCombo({ product, onAdd }: { product: Product; onAdd: (p: Product) => void }) {
  const { t } = useI18n();
  const savings = product.price - (product.salePrice ?? product.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mt-10 overflow-hidden rounded-2xl border border-[#80cc28]/40 bg-gradient-to-br from-lime-50 via-white to-emerald-50/40 shadow-lime"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
        {/* Image side */}
        <div className="relative min-h-[16rem] bg-gradient-to-br from-lime-100 to-emerald-50 lg:min-h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain p-6"
          />
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            <Badge className="gap-1 bg-[#80cc28] text-emerald-950 hover:bg-[#80cc28]">
              <Package className="h-3 w-3" aria-hidden />
              {t.shopComboBadge}
            </Badge>
            <Badge className="gap-1 bg-rose-500 text-white hover:bg-rose-500">
              {t.shopOnSale} · −R{savings.toFixed(2)}
            </Badge>
          </div>
        </div>

        {/* Info side */}
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            {t.shopFeaturedTitle}
          </span>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
              ))}
            </div>
            <span className="text-xs text-slate-500">5.00 out of 5</span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.shopFeaturedLead}
          </p>

          <div className="mt-5 flex flex-wrap items-end gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400 line-through">
                R{product.price.toFixed(2)}
              </p>
              <p className="text-4xl font-extrabold text-emerald-800">
                R{(product.salePrice ?? product.price).toFixed(2)}
              </p>
            </div>
            <Button
              onClick={() => onAdd(product)}
              className="bg-[#80cc28] text-emerald-950 shadow-sm hover:bg-[#6fb81e]"
              size="lg"
            >
              <ShoppingCart className="h-4 w-4" aria-hidden />
              {t.shopAddToBasket}
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {product.flags.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 rounded-full border border-lime-200 bg-white px-2.5 py-1 font-semibold text-emerald-700"
              >
                <FlagIcon flag={f} />
                {f === "eco" ? t.shopEcoTag : f === "pet" ? t.shopPetTag : f === "combo" ? t.shopComboTag : t.shopFamilyTag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCard({
  product,
  onAdd,
  index,
}: {
  product: Product;
  onAdd: () => void;
  index: number;
}) {
  const { t } = useI18n();
  const onSale = product.salePrice !== undefined && product.salePrice < product.price;
  const tagline = product.taglineKey ? t[product.taglineKey] : product.tagline;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.04 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-lime-100 bg-white p-3 shadow-sm transition-all hover:-translate-y-1 hover:border-lime-200 hover:shadow-lime"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-lime-50 to-white ring-1 ring-lime-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-3 transition-transform group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-wrap gap-1">
          {product.flags.includes("combo") && (
            <Badge className="gap-1 bg-[#80cc28] px-1.5 py-0.5 text-[9px] text-emerald-950 hover:bg-[#80cc28]">
              {t.shopComboBadge}
            </Badge>
          )}
          {onSale && (
            <Badge className="gap-1 bg-rose-500 px-1.5 py-0.5 text-[9px] text-white hover:bg-rose-500">
              {t.shopOnSale}
            </Badge>
          )}
        </div>
        {/* Quick-add button on hover */}
        <button
          onClick={onAdd}
          className="absolute bottom-2 right-2 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-[#80cc28] text-emerald-950 opacity-0 shadow-md transition-all hover:bg-[#6fb81e] group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`${t.shopAddToBasket} — ${product.name}`}
        >
          <Plus className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex items-center gap-1">
          {product.flags.map((f) => (
            <span key={f} className="text-emerald-500" title={f}>
              <FlagIcon flag={f} />
            </span>
          ))}
        </div>
        <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-tight text-slate-800">
          {product.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-slate-500">
          {tagline}
        </p>
        <div className="mt-2 flex items-end justify-between gap-2">
          <div>
            {onSale && (
              <p className="text-[10px] text-slate-400 line-through">
                R{product.price.toFixed(2)}
              </p>
            )}
            <p className="text-lg font-extrabold text-emerald-800">
              R{(product.salePrice ?? product.price).toFixed(2)}
            </p>
            <p className="text-[10px] text-slate-400">{product.size}</p>
          </div>
          <Button
            onClick={onAdd}
            variant="outline"
            size="sm"
            className="border-lime-200 bg-lime-50 px-2 text-emerald-800 hover:bg-[#80cc28] hover:text-emerald-950"
          >
            <ShoppingCart className="h-3.5 w-3.5" aria-hidden />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function FlagIcon({ flag }: { flag: Product["flags"][number] }) {
  if (flag === "eco") return <Leaf className="h-3.5 w-3.5" aria-hidden />;
  if (flag === "pet") return <PawPrint className="h-3.5 w-3.5" aria-hidden />;
  if (flag === "family") return <Users className="h-3.5 w-3.5" aria-hidden />;
  if (flag === "combo") return <Package className="h-3.5 w-3.5" aria-hidden />;
  return null;
}
