import { Award, CheckCircle2, HeartHandshake, Leaf, Milk, Mountain, PackageCheck, ShieldCheck, Sparkles, WheatOff } from "lucide-react";

export const site = {
  name: "White Himalayan Dog Chew",
  description:
    "Premium Himalayan yak chews made with traditional mountain methods for healthy, happy dogs.",
  url: "https://whitehimalayandogchew.com",
};

export const trustIndicators = [
  { label: "100% Natural", icon: Leaf },
  { label: "Handmade by Farmers", icon: HeartHandshake },
  { label: "Fair Trade", icon: Award },
  { label: "High Protein", icon: Sparkles },
  { label: "Low Lactose", icon: Milk },
  { label: "Grain Free", icon: WheatOff },
];
const cheeseImage="/chesse-puff.jpg"
const smallImage="/smaal.jpg"
const medium="/medium.jpg"
const large="/large.jpg"
const xl="/xl.jpg"
const big="/big.jpg"
const bigdog="/bigdog.jpg"
export const products = [
  {
    slug: "Small",
    name: "Small",
    category: "Puff",
    size: "35 g",
    badge: "Puff",
    image: smallImage,
    description: "Crunchy, airy churpi puffs made for lighter snack moments.",
    color: "#c88d52",
    shape: "puffs",
  },
  {
    slug: "waffles",
    name: "Medium",
    category: "Waffle",
    size: "70 g",
    badge: "Waffle",
    image: medium,
    description: "Grid-textured chews for satisfying surface crunch and enrichment.",
    color: "#bd844a",
    shape: "waffle",
  },
  {
    slug: "small-yak-chew",
    name: "Large",
    category: "Churpi",
    size: "100 g",
    badge: "Churpi",
    image: large,
    description: "A compact, long-lasting chew for petite dogs and careful nibblers.",
    color: "#d99735",
    shape: "sticks",
  },
  {
    slug: "medium-yak-chew",
    name: "XL",
    category: "Churpi",
    size: "140 g",
    badge: "Churpi",
    image: xl,
    description: "Balanced density and chew time for everyday enrichment.",
    color: "#c9822e",
    shape: "sticks",
  },
  {
    slug: "large-yak-chew",
    name: "XXL",
    category: "Churpi",
    size: "170 g",
    badge: "Churpi",
    image: big,
    description: "A satisfying mountain-style chew for larger dogs who need more time.",
    color: "#d3923e",
    shape: "bundle",
  },
  {
    slug: "extra-large-yak-chew",
    name: "Big Dog",
    category: "Churpi",
    size: "250 g",
    badge: "Churpi",
    image: bigdog,
    description: "Dense and durable for strong jaws, slow sessions, and happy routines.",
    color: "#cf8b34",
    shape: "bundle",
  },
  {
    slug: "xxl-yak-chew",
    name: "Yak Cheese Puff",
    category: "Churpi",
    size: "35 g",
    badge: "Churpi",
    image: cheeseImage,
    description: "Oversized churpi for powerful chewers and longer sessions.",
    color: "#d69b4e",
    shape: "sticks",
  },

] as const;

export const processSteps = [
  {
    title: "Milk Collection & Quality Testing",
    text: "Fresh yak or cow milk is collected, filtered, and tested for quality.",
    icon: Milk,
    image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heating & Pasteurization",
    text: "The milk is heated and pasteurized to ensure safety.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Natural Curdling",
    text: "Lime juice is added to curdle the milk and form curds.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Whey Separation & Draining",
    text: "The curds are separated from the whey and drained thoroughly.",
    icon: PackageCheck,
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pressing & Cheese Block Formation",
    text: "The curds are pressed to remove moisture and shaped into cheese blocks.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cutting Into Chew Sizes",
    text: "The cheese blocks are cut into the required chew sizes and shapes.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1581092335397-9fa3411086d4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Smoke-Drying & Aging",
    text: "The chews are smoke-dried and aged for several weeks to achieve their hard texture.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Inspection, Grading & Packaging",
    text: "The finished chews are inspected, graded, and packaged for sale.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1581092335397-9fa3411086d4?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    quote: "Our retriever settles in with one after every hike. It lasts, it smells clean, and the ingredient list is beautifully simple.",
    name: "Maya R.",
    detail: "Golden retriever parent",
  },
  {
    quote: "Finally, a premium chew that feels aligned with how we feed our dog. No fillers, no crumbs everywhere, just a happy pup.",
    name: "Theo B.",
    detail: "Wellness-focused dog dad",
  },
  {
    quote: "The jumbo size holds up to our shepherd mix. We love that the farmers are part of the story, not hidden behind the brand.",
    name: "Amara S.",
    detail: "Rescue dog family",
  },
];

export const faqs = [
  {
    q: "What are Himalayan yak chews made from?",
    a: "They are traditionally made from yak and cow milk, lime juice, and a small amount of salt, then pressed and aged into a hard natural chew.",
  },
  {
    q: "Are these chews safe for puppies?",
    a: "They are best for supervised chewing and dogs with adult teeth. For puppies, choose the right size and ask your veterinarian if your dog has dental concerns.",
  },
  {
    q: "How do I choose a size?",
    a: "Pick a chew larger than your dog can swallow whole. When in doubt, size up and supervise every chewing session.",
  },
  {
    q: "What should I do with the small leftover end?",
    a: "Remove it before it becomes a choking risk. Many pet parents soak the end and microwave it briefly to create a crunchy puff treat.",
  },
  {
    q: "Are they lactose free?",
    a: "The traditional aging process removes much of the lactose, making the chews low lactose, but dogs with known dairy sensitivities should start carefully.",
  },
  {
    q: "Do you work directly with farmers?",
    a: "Yes. The brand model centers small-batch sourcing, fair pricing, and long-term relationships with Himalayan farming communities.",
  },
];
