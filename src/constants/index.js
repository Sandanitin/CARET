import { Code, ShoppingCart, Camera, Truck, TrendingUp, Box, Users, Zap } from 'lucide-react';

export const services = [
    {
        title: "Website & eCommerce Development",
        description: "Custom-built, responsive websites and online stores optimized for conversions and user experience.",
        price: "$2,500+",
        icon: Code,
        features: ["Custom WordPress/WooCommerce", "Shopify & Magento Setup", "Mobile-First Design", "Payment Integration"],
        image: "service-ecommerce.jpg"
    },
    {
        title: "Marketplace Management",
        description: "Maximize your sales on Amazon, Flipkart, Walmart, and other marketplaces.",
        price: "$800+ /month",
        icon: ShoppingCart,
        features: ["Amazon Seller/Vendor Central", "Account Optimization", "Product Listing & SEO", "PPC Management"],
        image: "service-marketplace.jpg"
    },
    {
        title: "Product Photography & Editing",
        description: "Professional product photography that increases conversions by showcasing your products in the best light.",
        price: "$50+ /product",
        icon: Camera,
        features: ["Studio & Lifestyle Shots", "360° Product Views", "Professional Editing", "Background Removal"],
        image: "service-photography.jpg"
    },
    {
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies to increase visibility and drive targeted traffic.",
        price: "$1,200+ /month",
        icon: TrendingUp,
        features: ["SEO & Local Search", "Google Ads & PPC", "Meta Ads", "Social Media Marketing"],
        image: "service-marketing.jpg"
    },
    {
        title: "Fulfillment & Logistics",
        description: "End-to-end logistics solutions including warehousing, inventory management, and shipping.",
        price: "$500+ /month",
        icon: Truck,
        features: ["Order Processing", "Warehousing", "Shipping Integration", "Returns Management"],
        image: "service-fulfillment.jpg"
    },
    {
        title: "Inventory & Warehousing",
        description: "Scalable warehousing solutions with real-time inventory tracking and intelligent stock management.",
        price: "$300+ /month",
        icon: Box,
        features: ["Secure Storage", "Real-time Tracking", "Multi-channel Fulfillment", "Stock Alerts"],
        image: "service-inventory.jpg"
    },
    {
        title: "Business Consulting",
        description: "Strategic guidance for business formation, compliance, and growth strategies.",
        price: "$150 /hour",
        icon: Users,
        features: ["Business Formation", "NAICS Code Guidance", "Regulatory Compliance", "Strategy Development"],
        image: "service-consulting.jpg"
    },
    {
        title: "Automation Services",
        description: "Streamline your business processes with custom automation solutions using n8n and Zapier.",
        price: "$1,000+ /project",
        icon: Zap,
        features: ["Workflow Automation", "Custom API Integrations", "Data Sync", "Automated Reporting"],
        image: "service-automation.jpg"
    }
];

export const stats = [
    { label: "Successful Projects", value: "250+" },
    { label: "Revenue Generated", value: "$50M+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Avg. Growth Rate", value: "40%" },
];

export const processSteps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We analyze your business goals, target audience, and competition to develop a customized strategy."
    },
    {
        number: "02",
        title: "Planning & Design",
        description: "Creating detailed plans, wireframes, and designs that align with your brand and objectives."
    },
    {
        number: "03",
        title: "Development & Implementation",
        description: "Building and implementing solutions with regular updates and transparent communication."
    },
    {
        number: "04",
        title: "Launch & Optimization",
        description: "Deploying your solution and continuously optimizing for performance and growth."
    }
];
