"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Server,
  Shield,
  GitBranch,
  Container,
  Layers,
  ArrowRight,
  Zap,
  LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const CloudServices = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Server,
      title: "Infrastructure as a Service",
      description:
        "Scalable, flexible infrastructure solutions that grow with your business needs, from compute to storage.",
      features: [
        "Virtual machine provisioning",
        "Auto-scaling infrastructure",
        "Load balancing & CDN",
        "Block & object storage",
      ],
    },
    {
      icon: Layers,
      title: "Platform as a Service",
      description:
        "Complete development and deployment platforms that accelerate application delivery without infrastructure management.",
      features: [
        "Managed databases",
        "Application hosting",
        "Development frameworks",
        "Integrated monitoring tools",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description:
        "Seamless transition from on-premise to cloud with minimal disruption and maximum efficiency gains.",
      features: [
        "Assessment & planning",
        "Data migration strategies",
        "Application modernization",
        "Hybrid cloud solutions",
      ],
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description:
        "Streamline development workflows with automated pipelines, continuous integration, and rapid deployment.",
      features: [
        "Automated testing pipelines",
        "Container orchestration",
        "Infrastructure as Code",
        "Continuous deployment",
      ],
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description:
        "Enterprise-grade security solutions protecting your data, applications, and infrastructure in the cloud.",
      features: [
        "Identity & access management",
        "Encryption & key management",
        "Compliance monitoring",
        "Threat detection & response",
      ],
    },
    {
      icon: Container,
      title: "Serverless & Containers",
      description:
        "Modern application architectures with serverless functions and containerized workloads for optimal performance.",
      features: [
        "Function-as-a-Service",
        "Container registry",
        "Kubernetes management",
        "Event-driven architecture",
      ],
    },
  ];

  return (
    <div
      className="
            overflow-clip inset-0 -z-10 h-full w-full bg-transparent bg-[size:14px_24px]
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
          "
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,139,49,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(43,178,224,0.08),transparent_50%)]" />

        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Enterprise Cloud Solutions
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Cloud{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)]">
                Services
              </span>
            </h1>

            <p
              className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Empower your business with scalable, secure, and innovative cloud
              infrastructure. From migration to management, we deliver
              comprehensive cloud solutions.
            </p>

            <div
              className="flex flex-wrap gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                size="lg"
                className="bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)] text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group border-0"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary/10 transition-all duration-300"
              >
                View Solutions
              </Button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#FA8B31]/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-[#2BB2E0]/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)]">
              Capabilities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end cloud services designed to optimize performance, reduce
            costs, and accelerate innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === index;

            return (
              <Card
                key={service.title}
                className="glass relative overflow-hidden group cursor-pointer hover-lift p-8 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setExpandedCard(index)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)] transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-sm font-semibold mb-3 text-primary">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)]" />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)] opacity-5" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud solutions can transform your
              infrastructure and accelerate your digital journey.
            </p>
            <Button
              size="lg"
              className="bg-[linear-gradient(to_right,#FA8B31,#FC4950,#D15F8E,#2BB2E0,#8D78BC)] text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-0"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;
