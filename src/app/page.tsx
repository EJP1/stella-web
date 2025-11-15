import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrickBackground } from "@/components/ui/brick-background";
import { GradientBackground } from "@/components/ui/gradient-background";
import { RotatedBrick } from "@/components/ui/rotated-brick";
import { PageLayout } from "@/components/page-layout";
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
    <PageLayout includeFooter>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="text-center px-4 sm:px-6">
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
        </div>
        <div className="mt-20 w-full h-[400px] relative">
          <BrickBackground
            palette="Pisces"
            orientation="horizontal"
            gap={10}
            blur={false}
            backgroundColor="white"
            animate
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Hero content will go here */}
          </div>
        </div>
      </section>

      {/* Features Section - Budgeting */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-[500px] flex items-center justify-center">
              <RotatedBrick palette="Pisces" colorIndex={2} skew={15} />
            </div>
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
          </div>
        </div>
      </section>

      {/* Features Section - Saving */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden h-[400px] shadow-xl relative">
              <GradientBackground palette="Libra" />
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
      <section className="py-20 px-4 sm:px-6 bg-muted/30">
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
              <GradientBackground palette="Leo" />
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Investment dashboard image will go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6">
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
      <section className="py-20 px-4 sm:px-6 bg-muted/30">
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
      <section className="py-20 px-4 sm:px-6">
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
    </PageLayout>
  );
}
