
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Users, Award, Book, Briefcase, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [showEnterprise, setShowEnterprise] = useState(false);
  
  const individualPlans = [
    {
      name: "Free",
      description: "For those just starting their AI journey",
      price: 0,
      features: [
        { name: "AI Literacy Assessment Quiz", included: true },
        { name: "Basic AI Terminology Guide", included: true },
        { name: "Progress Tracking", included: true },
        { name: "Community Forum Access", included: false },
        { name: "Personalized Learning Path", included: false },
        { name: "Certificate of Completion", included: false },
        { name: "Daily AI Updates", included: false },
        { name: "Expert Webinars", included: false },
      ],
      cta: "Start for Free",
      popular: false,
    },
    {
      name: "Pro",
      description: "For individuals serious about AI literacy",
      price: billingCycle === "monthly" ? 19 : 15,
      features: [
        { name: "AI Literacy Assessment Quiz", included: true },
        { name: "Basic AI Terminology Guide", included: true },
        { name: "Progress Tracking", included: true },
        { name: "Community Forum Access", included: true },
        { name: "Personalized Learning Path", included: true },
        { name: "Certificate of Completion", included: true },
        { name: "Daily AI Updates", included: false },
        { name: "Expert Webinars", included: false },
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Pro+",
      description: "For professionals who want to stay ahead",
      price: billingCycle === "monthly" ? 39 : 29,
      features: [
        { name: "AI Literacy Assessment Quiz", included: true },
        { name: "Basic AI Terminology Guide", included: true },
        { name: "Progress Tracking", included: true },
        { name: "Community Forum Access", included: true },
        { name: "Personalized Learning Path", included: true },
        { name: "Certificate of Completion", included: true },
        { name: "Daily AI Updates", included: true },
        { name: "Expert Webinars", included: true },
      ],
      cta: "Get Pro+",
      popular: false,
    },
  ];

  const enterprisePlans = [
    {
      name: "Starter",
      description: "For small teams up to 20 people",
      price: billingCycle === "monthly" ? 199 : 159,
      maxSeats: "20 seats",
      features: [
        { name: "Team Dashboard", included: true },
        { name: "Team Progress Reports", included: true },
        { name: "Dedicated Account Manager", included: false },
        { name: "LMS Integration", included: false },
        { name: "Custom Learning Paths", included: false },
        { name: "Executive AI-Readiness Reports", included: false },
      ],
      cta: "Contact Sales",
      popular: false,
    },
    {
      name: "Growth",
      description: "For growing organizations up to 100 people",
      price: billingCycle === "monthly" ? 499 : 399,
      maxSeats: "100 seats",
      features: [
        { name: "Team Dashboard", included: true },
        { name: "Team Progress Reports", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "LMS Integration", included: true },
        { name: "Custom Learning Paths", included: false },
        { name: "Executive AI-Readiness Reports", included: false },
      ],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Enterprise+",
      description: "For large organizations with custom needs",
      price: null,
      maxSeats: "Unlimited seats",
      features: [
        { name: "Team Dashboard", included: true },
        { name: "Team Progress Reports", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "LMS Integration", included: true },
        { name: "Custom Learning Paths", included: true },
        { name: "Executive AI-Readiness Reports", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 md:py-24 bg-gradient-to-b from-white to-brand-light-blue/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Empower Your AI Journey</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Invest just 10 minutes a day to stay ahead in the rapidly changing world of AI
              </p>
              
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* Billing cycle toggle */}
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
                  <ToggleGroup type="single" value={billingCycle} onValueChange={(value: "monthly" | "annual") => value && setBillingCycle(value)}>
                    <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
                    <ToggleGroupItem value="annual">Annual</ToggleGroupItem>
                  </ToggleGroup>
                  <span className={`text-sm font-medium ${billingCycle === "annual" ? "text-foreground" : "text-muted-foreground"}`}>
                    Annual <span className="text-brand-blue">Save 20%</span>
                  </span>
                </div>

                {/* Plan type toggle */}
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant={!showEnterprise ? "default" : "outline"}
                    onClick={() => setShowEnterprise(false)}
                    className="w-40"
                  >
                    Individual
                  </Button>
                  <Button
                    variant={showEnterprise ? "default" : "outline"}
                    onClick={() => setShowEnterprise(true)}
                    className="w-40"
                  >
                    <Users className="mr-2 h-4 w-4" /> Enterprise
                  </Button>
                </div>
              </div>
            </div>

            {/* Individual Plans */}
            {!showEnterprise && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {individualPlans.map((plan) => (
                  <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-brand-blue shadow-md relative' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue">Most Popular</Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-base h-12">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold">
                            {plan.price === 0 ? "Free" : `$${plan.price}`}
                          </span>
                          {plan.price > 0 && (
                            <span className="text-muted-foreground ml-2">/{billingCycle === "monthly" ? "mo" : "mo annually"}</span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-center">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                            )}
                            <span className={feature.included ? "" : "text-muted-foreground"}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-brand-blue hover:bg-brand-dark-blue' : ''}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {/* Enterprise Plans */}
            {showEnterprise && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {enterprisePlans.map((plan) => (
                  <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-brand-blue shadow-md relative' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue">Most Popular</Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Users className="mr-2 h-5 w-5" /> {plan.name}
                      </CardTitle>
                      <CardDescription className="text-base h-12">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold">
                            {plan.price === null ? "Custom" : `$${plan.price}`}
                          </span>
                          {plan.price !== null && (
                            <span className="text-muted-foreground ml-2">/{billingCycle === "monthly" ? "mo" : "mo annually"}</span>
                          )}
                        </div>
                        <div className="text-muted-foreground mt-1">{plan.maxSeats}</div>
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-center">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                            )}
                            <span className={feature.included ? "" : "text-muted-foreground"}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-brand-blue hover:bg-brand-dark-blue' : ''}`}
                        variant={plan.name === "Enterprise+" ? "default" : (plan.popular ? "default" : "outline")}
                      >
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {/* Plan comparison table */}
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                {showEnterprise ? "Compare Enterprise Plans" : "Compare Individual Plans"}
              </h2>
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Features</TableHead>
                      {(showEnterprise ? enterprisePlans : individualPlans).map((plan) => (
                        <TableHead key={plan.name} className="text-center">{plan.name}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {!showEnterprise ? (
                      // Individual plan features
                      <>
                        {individualPlans[0].features.map((feature, index) => (
                          <TableRow key={feature.name}>
                            <TableCell className="font-medium">{feature.name}</TableCell>
                            {individualPlans.map((plan) => (
                              <TableCell key={`${plan.name}-${feature.name}`} className="text-center">
                                {plan.features[index].included ? (
                                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </>
                    ) : (
                      // Enterprise plan features
                      <>
                        {enterprisePlans[0].features.map((feature, index) => (
                          <TableRow key={feature.name}>
                            <TableCell className="font-medium">{feature.name}</TableCell>
                            {enterprisePlans.map((plan) => (
                              <TableCell key={`${plan.name}-${feature.name}`} className="text-center">
                                {plan.features[index].included ? (
                                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-muted-foreground mx-auto" />
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell className="font-medium">Max Seats</TableCell>
                          {enterprisePlans.map((plan) => (
                            <TableCell key={`${plan.name}-seats`} className="text-center">
                              {plan.maxSeats}
                            </TableCell>
                          ))}
                        </TableRow>
                      </>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Add-ons section */}
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Additional Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5" /> Certification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Validate your AI skills with our industry-recognized certification program.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Book className="mr-2 h-5 w-5" /> LMS Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Seamlessly integrate our content with your existing learning management systems.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" /> Executive Reports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Get detailed AI-readiness reports for executive decision making and strategic planning.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-20 text-center">
              <h2 className="text-xl font-medium text-muted-foreground mb-6">Trusted By Learning Teams Everywhere</h2>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="bg-muted rounded-md px-6 py-4">
                  <p className="font-bold">Backed by Berkeley Haas MBA</p>
                </div>
                <div className="bg-muted rounded-md px-6 py-4">
                  <p className="font-bold">24h Update Cycle</p>
                </div>
                <div className="bg-muted rounded-md px-6 py-4">
                  <p className="font-bold">10,000+ Professionals Trained</p>
                </div>
              </div>
            </div>

            {/* FAQ section */}
            <div className="mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How much time will I need to commit?</h3>
                  <p className="text-muted-foreground">Our modules are designed to be completed in just 10 minutes a day, making it easy to fit learning into your busy schedule.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Is the content regularly updated?</h3>
                  <p className="text-muted-foreground">Yes! We update our content daily to keep pace with the rapidly evolving AI landscape.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-muted-foreground">Absolutely. You can upgrade, downgrade, or cancel your subscription at any time.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you offer custom enterprise solutions?</h3>
                  <p className="text-muted-foreground">Yes, our Enterprise+ plan can be tailored to meet your organization's specific needs. Contact our sales team to learn more.</p>
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="mt-20 text-center">
              <div className="bg-brand-light-blue/30 rounded-lg p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your AI journey?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">Take our free AI literacy quiz and get a personalized learning path tailored to your knowledge level.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-dark-blue">Start For Free</Button>
                  <Button size="lg" variant="outline">Talk to Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
