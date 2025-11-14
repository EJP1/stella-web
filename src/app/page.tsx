import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  PiggyBank,
  Target,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold">
              Stella
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>
          <Button>Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            AI-powered financial services
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Your money,
            <br />
            <span className="text-primary">simplified</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-base">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Watch Demo
            </Button>
          </div>
          <div className="mt-20 rounded-3xl overflow-hidden max-w-5xl mx-auto h-[400px] shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A3C9] via-[#8BA8D4] to-[#5B5B94]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#C9A3C9_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_#5B5B94_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#8BA8D4_0%,_transparent_60%)]" />
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Hero content will go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Budgeting */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Stella is for <span className="text-primary">Budgeting</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Track every dollar automatically
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Smart category detection
                    </h3>
                    <p className="text-muted-foreground">
                      AI automatically categorizes your spending
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Personalized insights
                    </h3>
                    <p className="text-muted-foreground">
                      Get actionable recommendations based on your habits
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px] shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8CF7C] via-[#B780D9] to-[#7EC8E3]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_#C8CF7C_0%,_transparent_45%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_#7EC8E3_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,_#B780D9_0%,_transparent_55%)]" />
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Budgeting feature image will go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Saving */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden h-[400px] shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2C8D4] via-[#D5976D] to-[#8BBDD9]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,_#F2C8D4_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,_#8BBDD9_0%,_transparent_48%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,_#D5976D_0%,_transparent_52%)]" />
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Saving goals image will go here */}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-4">
                Stella is for <span className="text-primary">Saving</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Reach your goals faster
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <PiggyBank className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Automatic savings</h3>
                    <p className="text-muted-foreground">
                      Set it and forget it with round-up savings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Goal tracking</h3>
                    <p className="text-muted-foreground">
                      Visualize progress towards your financial goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Investing */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Stella is for <span className="text-primary">Investing</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Build wealth with confidence
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      AI-powered recommendations
                    </h3>
                    <p className="text-muted-foreground">
                      Get personalized investment strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Portfolio tracking</h3>
                    <p className="text-muted-foreground">
                      Monitor your investments in real-time
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px] shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A24672] via-[#A1AAC0] to-[#2B3D4F]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#A24672_0%,_transparent_48%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_#2B3D4F_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#A1AAC0_0%,_transparent_58%)]" />
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Investment dashboard image will go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Stella is for <span className="text-primary">You</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  "Stella helped me save $5,000 in just 6 months. The automatic
                  savings feature is a game-changer."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Sarah</p>
                    <p className="text-sm text-muted-foreground">
                      Small Business Owner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  "Finally, an app that makes investing simple. Stella's AI
                  gives me confidence in my decisions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Michael</p>
                    <p className="text-sm text-muted-foreground">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  "I've tried every budgeting app. Stella is the only one that
                  actually works for me."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold">Jessica</p>
                    <p className="text-sm text-muted-foreground">
                      Marketing Manager
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-4">
            Privacy in Stella, you're in control
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Stella exists to help you achieve financial freedom, not to profit
            off your personal data. We believe it's up to you to customize what
            you see and what you share.
          </p>
          <a
            href="/privacy"
            className="text-primary hover:underline font-medium"
          >
            Learn more about privacy in Stella →
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">
            Stella. <span className="text-primary">Take control.</span>
          </h2>
          <Button size="lg" className="mt-8 text-base">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-muted-foreground mt-6">
            Available on iOS, Android, and Web.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/help"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2025 Stella. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
