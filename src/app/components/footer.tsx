import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'

const mainLinks = [
  { name: "About us", href: "https://scalixity.com/work" },
  { name: "Blog", href: "https://scalixity.com/blog" },
  { name: "Resources", href: "https://scalixity.com/resources" },
  // { name: "Careers", href: "/careers" },
  { name: "Contact us", href: "https://scalixity.com/contact" }
]

const services = {
  "Artificial Intelligence": [
    { name: "AI Development Services", href: "https://scalixity.com/services/ai-development" },
    { name: "Enterprise AI Development", href: "https://scalixity.com/services/enterprise-ai" },
    { name: "AI Consulting Services", href: "https://scalixity.com/services/ai-consulting" },
    { name: "AI Chatbot Development", href: "https://scalixity.com/services/chatbot" },
    { name: "AI POC Development", href: "https://scalixity.com/services/poc" },
    { name: "Enterprise AI Chatbot Development", href: "https://scalixity.com/services/enterprise-chatbot" },
    { name: "AI Engineers", href: "https://scalixity.com/services/engineers" },
    { name: "AI Copilot Development", href: "https://scalixity.com/services/copilot" },
    { name: "Computer Vision Development Services", href: "https://scalixity.com/services/computer-vision" },
    { name: "ML Development", href: "https://scalixity.com/services/ml" },
    { name: "MLOps Consulting Services", href: "https://scalixity.com/services/mlops" },
    { name: "Conversational AI Development", href: "https://scalixity.com/services/conversational-ai" },
    { name: "LLM API Pricing Calculator", href: "https://scalixity.com/services/llm-pricing" }
  ],
  "Generative AI": [
    { name: "Generative AI Development", href: "https://scalixity.com/services/generative-ai" },
    { name: "Generative AI Consulting", href: "https://scalixity.com/services/generative-ai-consulting" },
    { name: "Enterprise Generative AI Development", href: "https://scalixity.com/services/enterprise-gen-ai" },
    { name: "AI Agent Development", href: "https://scalixity.com/services/ai-agent" },
    { name: "LLM Development", href: "https://scalixity.com/services/llm" },
    { name: "Generative AI Integration", href: "https://scalixity.com/services/gen-ai-integration" },
    { name: "Adaptive AI Development", href: "https://scalixity.com/services/adaptive-ai" },
    { name: "ChatGPT Developers", href: "https://scalixity.com/services/chatgpt" },
    { name: "Hire Prompt Engineers", href: "https://scalixity.com/services/prompt-engineers" },
    { name: "ChatGPT Integration Service", href: "https://scalixity.com/services/chatgpt-integration" },
    { name: "Midjourney Developers", href: "https://scalixity.com/services/midjourney" },
    { name: "Stable Diffusion Developers", href: "https://scalixity.com/services/stable-diffusion" }
  ],
  "Blockchain Development": [
    { name: "Cardano App Development", href: "https://scalixity.com/services/cardano" },
    { name: "Stellar App Development", href: "https://scalixity.com/services/stellar" },
    { name: "Smart Contracts Development", href: "https://scalixity.com/services/smart-contracts" },
    { name: "dApps Development", href: "https://scalixity.com/services/dapps" },
    { name: "NFT Marketplace Development", href: "https://scalixity.com/services/nft" },
    { name: "Hedera App Development", href: "https://scalixity.com/services/hedera" },
    { name: "Metaverse Development", href: "https://scalixity.com/services/metaverse" }
  ],
  "Mobile Development": [
    { name: "Hybrid App Development", href: "https://scalixity.com/services/hybrid" },
    { name: "Native App Development", href: "https://scalixity.com/services/native" },
    { name: "iOS App Development", href: "https://scalixity.com/services/ios" },
    { name: "Android App Development", href: "https://scalixity.com/services/android" },
    { name: "Flutter App Development", href: "https://scalixity.com/services/flutter" },
    { name: "React Native App Development", href: "https://scalixity.com/services/react-native" },
    { name: "Ionic App Development", href: "https://scalixity.com/services/ionic" },
    { name: "Xamarin App Development", href: "https://scalixity.com/services/xamarin" }
  ]
}

const otherServices = {
  "Industries": [
    { name: "Healthcare", href: "https://scalixity.com/industries/healthcare" },
    { name: "Fintech", href: "https://scalixity.com/industries/fintech" },
    { name: "Retail", href: "https://scalixity.com/industries/retail" },
    { name: "SaaS", href: "https://scalixity.com/industries/saas" },
    { name: "Travel", href: "https://scalixity.com/industries/travel" },
    { name: "Fitness", href: "https://scalixity.com/industries/fitness" },
    { name: "Insurance", href: "https://scalixity.com/industries/insurance" },
    { name: "Construction", href: "https://scalixity.com/industries/construction" },
    { name: "Manufacturing", href: "https://scalixity.com/industries/manufacturing" },
    { name: "Food", href: "https://scalixity.com/industries/food" }
  ],
  "Web Development": [
    { name: "Web3 App Development", href: "https://scalixity.com/services/web3" },
    { name: "React.js App Development", href: "https://scalixity.com/services/reactjs" },
    { name: "Express.js App Development", href: "https://scalixity.com/services/expressjs" },
    { name: "Node.js App Development", href: "https://scalixity.com/services/nodejs" },
    { name: "PWA Development", href: "https://scalixity.com/services/pwa" }
  ],
  "Software Development": [
    { name: "Product Development", href: "https://scalixity.com/services/product" },
    { name: "Enterprise App Development", href: "https://scalixity.com/services/enterprise" },
    { name: "IoT Development", href: "https://scalixity.com/services/iot" },
    { name: "App Modernization", href: "https://scalixity.com/services/modernization" }
  ],
  "Cloud Development": [
    { name: "AWS App Development", href: "https://scalixity.com/services/aws" },
    { name: "Azure App Development", href: "https://scalixity.com/services/azure" },
    { name: "GCP App Development", href: "https://scalixity.com/services/gcp" }
  ],
  "Design": [
    { name: "Mobile App Design", href: "https://scalixity.com/services/mobile-design" },
    { name: "App Blueprint", href: "https://scalixity.com/services/blueprint" },
    { name: "Web Design", href: "https://scalixity.com/services/web-design" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-[#080B16] border-t border-white/10 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Main Links Column */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <span className="text-2xl font-bold text-white">Scalixity</span>
            </Link>
            <div className="space-y-4">
              {mainLinks.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                Hire Developers
              </Link>
            </div>
          </div>

          {/* Services Columns */}
          {Object.entries(services).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {Object.entries(otherServices).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <span>Scalixity Inc. | Copyright 2024 | </span>
            <Link href="https://scalixity.com/privacy" className="hover:text-white">Privacy Policy</Link>
            <span> | </span>
            <Link href="https://scalixity.com/terms" className="hover:text-white">Terms & Conditions</Link>
            <span> | </span>
            <Link href="https://scalixity.com/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/company/Scalixity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/scalixity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
