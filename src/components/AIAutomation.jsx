import {
  Bot,
  DatabaseZap,
  FileSearch,
  PhoneCall,
  Workflow,
} from 'lucide-react';

const capabilities = [
  {
    icon: <Workflow size={22} />,
    title: 'Workflow Automation',
    description:
      '20+ n8n workflows for lead capture, data syncing, notifications, and cross-platform integrations.',
  },
  {
    icon: <Bot size={22} />,
    title: 'AI Agents & RAG',
    description:
      'AI agents and embeddings-based retrieval pipelines that deliver grounded, real-time answers from business documents.',
  },
  {
    icon: <PhoneCall size={22} />,
    title: 'Voice & Telephony',
    description:
      'Inbound and outbound calling, lead qualification, IVR-style logic, and human handoff with Vapi and Retell.',
  },
  {
    icon: <DatabaseZap size={22} />,
    title: 'CRM Integration',
    description:
      'CRM system design and client-facing delivery that turns business requirements into reliable automation infrastructure.',
  },
];

const automationProjects = [
  {
    title: 'Walaa Insurance',
    category: 'AI Inbound Call Assistant',
    description:
      'Built an inbound call system integrating 3CX telephony/IVR with a Vapi voice assistant. It answers insurance queries from live Salesforce and Zoho CRM data, creates support tickets, sends email and Slack notifications, and escalates to a human agent when needed.',
    tech: ['3CX', 'Vapi', 'Salesforce', 'Zoho', 'CRM', 'Slack'],
  },
  {
    title: 'ESNAD',
    category: 'SharePoint-Native Case Management',
    description:
      'Built an automated case-document system with SharePoint Online, Power Automate, and AI Builder. Metadata-driven libraries, email intake, automatic attachment filing, and AI-assisted labeling replace manual folder management while keeping a human confirmation step.',
    tech: ['SharePoint', 'Power Automate', 'AI Builder', 'Document AI'],
  },
  {
    title: 'PHA Weqaya',
    category: 'AI Chat Assistant for Document Intelligence',
    description:
      'Built an n8n AI agent that answers questions about uploaded documents in real time using embeddings-based search. A multi-source ingestion pipeline connects webhooks, drive uploads, and a custom Next.js dashboard to Supabase, with a KPI view for quick insights.',
    tech: ['n8n', 'RAG', 'Supabase', 'Next.js', 'Embeddings'],
  },
];

export default function AIAutomation() {
  return (
    <section id="ai-automation" className="py-24 px-6 bg-dark-light/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          AI <span className="text-primary">Automation</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate-300 text-lg leading-relaxed">
            Designing end-to-end automation systems that connect AI agents, CRM
            data, documents, workflows, and voice channels into dependable
            client-facing solutions.
          </p>
          <p className="text-primary font-medium mt-4">
            AI Automation Engineer at Logic Mount · Mar 2026 – Present
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group p-6 bg-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {capability.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {capability.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-8">
          <FileSearch size={20} className="text-primary" />
          <h3 className="text-2xl font-bold text-white">
            Selected <span className="text-primary">Automation Work</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {automationProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col p-6 bg-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-primary text-xs font-mono uppercase tracking-[0.14em] mb-3">
                {project.category}
              </p>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs px-2.5 py-1 bg-primary/5 text-slate-400 rounded-md font-mono"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

