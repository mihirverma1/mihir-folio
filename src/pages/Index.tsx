import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, ShieldCheck, ExternalLink, Github, Linkedin, Shield, Network, Cloud, ClipboardCheck, GitBranch, Bot, Twitter, Calendar } from "lucide-react";

const resumeUrl = "/uploads/55257577-6bf6-40a9-9314-f78effb35ae9.png";

const Index = () => {
  return (
    <div className="fixed top-0 w-full min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="container py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-tight text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mihir Verma</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#certifications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Certifications</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a href={resumeUrl} download="Mihir_Verma_Resume.png">
            <Button className="gap-2" aria-label="Download resume">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="absolute inset-0 hero-gradient opacity-70" aria-hidden="true" />
          <div className="container py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="brand-text-gradient">Mihir Verma</span><br className="hidden sm:block" />
              <span className="text-muted-foreground">Cybersecurity professional crafting secure, compliant, AI‑ready systems</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              With an open mind and vigilant spirit, I journey through the digital realm, continually seeking wisdom as I safeguard the data entrusted to my care.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="https://cal.com/ramsecon" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2"><Calendar className="h-4 w-4" /> Set a meeting</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" className="gap-2"><Mail className="h-4 w-4" /> Contact me</Button>
              </a>
              <nav aria-label="Social links" className="flex items-center gap-4 text-muted-foreground">
                <a className="hover:text-foreground" href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                <a className="hover:text-foreground" href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                <a className="hover:text-foreground" href="#" aria-label="Medium"><ExternalLink className="h-5 w-5" /></a>
                <a className="hover:text-foreground" href="mailto:mihirverma07@protonmail.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
                <a className="hover:text-foreground" href="#" aria-label="X (Twitter)"><Twitter className="h-5 w-5" /></a>
              </nav>
            </div>
          </div>
        </section>

        <section id="services" className="container py-12">
          <h2 className="text-2xl font-semibold mb-2">Cyber Shield Services</h2>
          <p className="text-sm text-muted-foreground mb-6">Expert services to harden systems and ensure audit‑ready compliance.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="surface-card border-border/60">
              <CardContent className="p-5 flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Threat Modeling</div>
                  <p className="text-sm text-muted-foreground">Identify design gaps early to reduce risk at scale.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="surface-card border-border/60">
              <CardContent className="p-5 flex items-start gap-3">
                <Network className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Network Security</div>
                  <p className="text-sm text-muted-foreground">Zero‑trust segmentation, IDS/IPS tuning, secure baselines.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="surface-card border-border/60">
              <CardContent className="p-5 flex items-start gap-3">
                <Cloud className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Cloud Security</div>
                  <p className="text-sm text-muted-foreground">Guardrails and policies for AWS/Azure with automated checks.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="surface-card border-border/60">
              <CardContent className="p-5 flex items-start gap-3">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Compliance & GRC</div>
                  <p className="text-sm text-muted-foreground">SOC 2, ISO 27001/27701, PCI DSS—evidence, controls, audits.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="surface-card border-border/60">
              <CardContent className="p-5 flex items-start gap-3">
                <GitBranch className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">DevSecOps</div>
                  <p className="text-sm text-muted-foreground">CI/CD security, SCA/SAST/DAST orchestration and policy.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="surface-card border-border/60">
              <CardContent className="p-5 flex items-start gap-3">
                <Bot className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">AI Security</div>
                  <p className="text-sm text-muted-foreground">NIST AI RMF, secure prompts, model governance and logging.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="container py-12">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Security",
              "TPRM",
              "Artificial Intelligence",
              "Audit & Risk Management",
              "Secure Software Development",
              "Legal & Regulatory Compliances",
              "Threat Modeling",
              "IT Governance",
              "Automation",
              "Compliance & GRC",
              "Cloud Security",
              "Security Architect",
            ].map((s) => (
              <Badge key={s} variant="secondary" className="px-3 py-1">{s}</Badge>
            ))}
          </div>
        </section>

        <section id="experience" className="container py-12">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-wrap items-center justify-between gap-2">
                  <span>Sr. Associate — National Payments Corporation of India, Mumbai</span>
                  <span className="text-sm text-muted-foreground">Dec 2024 – Present</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Creation of AI Security Policy and implementation of NIST AI RMF.</li>
                  <li>Ensured security of Digital Payments and platforms for business enablement.</li>
                  <li>Implemented frameworks ISO 27001:2022, SOC 2 Type II, PCI DSS across multiple business units.</li>
                  <li>Designed DevSecOps framework and integrated the solution organization-wide.</li>
                  <li>Continuous improvement of policies, procedures, and standards; 40% reduction in cloud incidents.</li>
                  <li>Conceptualized and implemented Threat Modeling to identify coding-level issues.</li>
                  <li>Reviewed architecture for BHIM, UPI, etc. from security perspective.</li>
                  <li>Led Third-Party Risk Assessments for the bank’s supply chain.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex flex-wrap items-center justify-between gap-2">
                  <span>Assistant Manager (Security Analyst) — State Bank of India, Navi Mumbai</span>
                  <span className="text-sm text-muted-foreground">Jul 2021 – Dec 2024</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Collaborated with cross-functional teams to align on security objectives throughout project lifecycles.</li>
                  <li>Implemented ISO 27001:2022, SOC 2 Type II and PCI DSS across business units.</li>
                  <li>Drove adoption of internal security support solutions and process improvements.</li>
                  <li>Influenced and resolved conflicts through strong stakeholder management.</li>
                  <li>Ensured regulatory compliance through meticulous compilation and implementation.</li>
                  <li>Improved cloud security policies, procedures, and standards to align with industry regulations.</li>
                  <li>Assessed third parties, evaluated posture, and ensured adherence to requirements.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex flex-wrap items-center justify-between gap-2">
                  <span>Software Engineer — Larsen & Toubro Infotech, Mumbai</span>
                  <span className="text-sm text-muted-foreground">Jun 2020 – Jun 2021</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Maintained Windows Server compliance for healthcare client serving 500+ users.</li>
                  <li>Managed payment apps handling $5M+ annual transactions.</li>
                  <li>Automated routine security tasks.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="education" className="container py-12">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Diploma in Cyber Law — Asian School of Cyber Laws</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Graduation Year: 2024</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>B.Tech in CSE (Cyber Security & Forensics) — UPES, Dehradun</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Graduation Year: 2020</CardContent>
            </Card>
          </div>
        </section>

        <section id="certifications" className="container py-12">
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "CISM — Certified Information Security Manager",
              "CEH — Certified Ethical Hacker",
              "CCSK — Certificate of Cloud Security Knowledge",
              "CCZT — Certificate of Competence in Zero Trust",
              "ISO 27701:2019 — Lead Auditor (LA)",
              "ISO 27701:2019 — Lead Implementer (LI)",
              "ISO 27001:2022 — Lead Auditor (LA)",
              "ISO 27001:2022 — Lead Implementer (LI)",
              "ISO 22301:2019 — Lead Auditor (LA)",
              "ISO 22301:2019 — Lead Implementer (LI)",
              "ISO 27017 — Cloud Security Manager",
              "PEN-100",
              "SOC-100",
            ].map((c) => (
              <Card key={c} className="border-border/70">
                <CardContent className="p-4 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{c}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="container py-12">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Mapper AI <span className="text-sm text-muted-foreground">(May 2025)</span></CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Built a local AI-powered compliance mapper integrating Trivy, Checkov, gitleaks and OWASP ZAP; mapped findings to PCI DSS, ISO 27001, SOC 2 controls using LLMs.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Risk Scoring for GenAI <span className="text-sm text-muted-foreground">(Feb 2025)</span></CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Real-time enterprise AI risk scoring with SOC 2, ISO, and PCI logging; containerized with streaming-based contextual scoring.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Vault for Payment Security <span className="text-sm text-muted-foreground">(Dec 2024)</span></CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Proposed an AI-powered token vault for secure card data handling, behavioral risk scoring, PCI DSS compliance, and adaptive auth.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="container py-16">
          <Card>
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Get in touch</h2>
                <p className="text-sm text-muted-foreground">Open to opportunities in threat intelligence, risk, and cloud security.</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="mailto:mihirverma07@protonmail.com"><Button variant="secondary" className="gap-2"><Mail className="h-4 w-4"/> Email</Button></a>
                
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 hover:text-foreground" href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href="#" aria-label="GitHub"><Github className="h-4 w-4"/> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href="#" aria-label="Medium"><ExternalLink className="h-4 w-4"/> Medium</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="container py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mihir Verma. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
