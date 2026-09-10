import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: "Vignan's Lara AI Tools Manual",
  description: "Comprehensive Teaching and Learning Material for AI Tools and Applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <aside className="sidebar">
            <nav style={{ marginTop: '2rem' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                  <details style={{ background: 'transparent', border: 'none', padding: 0, margin: '0 0 1rem 0' }}>
                    <summary style={{ outline: 'none', cursor: 'pointer', fontWeight: 600, color: '#333' }}><Link href="/unit-1" style={{ color: 'inherit', textDecoration: 'none' }}>Unit 1: Introduction</Link></summary>
                    <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                      <li style={{ marginBottom: '0.5rem', fontWeight: 600 }}><Link href="/unit-1#_Toc239677955" style={{ color: 'inherit' }}>1. Detailed Unit Content</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677956">1.1 What is AI, ML, and GenAI?</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677957">1.2 Core Categories of AI Tools</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677958">1.3 How LLMs Process Responses</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677959">1.4 Selecting the Right AI Tool</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677960">1.5 Setting Up Accounts</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677961">1.6 Widely Used AI Tools</Link></li>
                      <li style={{ margin: '1rem 0 0.5rem 0', fontWeight: 600 }}><Link href="/unit-1#_Toc239677962" style={{ color: 'inherit' }}>2. List of Experiments</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677963">Experiment 1: Live Comparison</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677964">Experiment 2: Tool Walkthrough</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677965">Experiment 3: Compare Platforms</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677966">Experiment 4: Comparison Chart</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677967">Experiment 5: Reflection on Task</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details style={{ background: 'transparent', border: 'none', padding: 0, margin: '0 0 1rem 0' }}>
                    <summary style={{ outline: 'none', cursor: 'pointer', fontWeight: 600, color: '#333' }}><Link href="/unit-2" style={{ color: 'inherit', textDecoration: 'none' }}>Unit 2: Prompt Engineering</Link></summary>
                    <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                      <li style={{ marginBottom: '0.5rem', fontWeight: 600 }}><Link href="/unit-2#_Toc239677969" style={{ color: 'inherit' }}>1. Detailed Unit Content</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677970">2.1 Anatomy of a Good Prompt</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677971">2.2 Zero-Shot & Few-Shot Prompting</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677972">2.3 Role-Based Prompts</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677973">2.4 Iterative Refinement</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677974">2.5 AI for Brainstorming & Drafting</Link></li>
                      <li style={{ margin: '1rem 0 0.5rem 0', fontWeight: 600 }}><Link href="/unit-2#_Toc239677975" style={{ color: 'inherit' }}>2. List of Experiments</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677976">Experiment 1: Refining Prompts</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677977">Experiment 2: Few-Shot Prompts</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677978">Experiment 3: Compare Prompts</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677979">Experiment 4: Summarise Article</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677980">Experiment 5: Chain-of-Thought Prompt</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details style={{ background: 'transparent', border: 'none', padding: 0, margin: '0 0 1rem 0' }}>
                    <summary style={{ outline: 'none', cursor: 'pointer', fontWeight: 600, color: '#333' }}><Link href="/unit-3" style={{ color: 'inherit', textDecoration: 'none' }}>Unit 3: Data Analysis</Link></summary>
                    <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                      <li style={{ marginBottom: '0.5rem', fontWeight: 600 }}><Link href="/unit-3#_Toc239677982" style={{ color: 'inherit' }}>1. Detailed Unit Content</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677983">3.1 AI-Assisted Spreadsheet Analysis</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677984">3.2 Natural-Language Querying</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677985">3.3 Generating Charts</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677986">3.4 Interpreting Summaries</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677987">3.5 Correcting Errors</Link></li>
                      <li style={{ margin: '1rem 0 0.5rem 0', fontWeight: 600 }}><Link href="/unit-3#_Toc239677988" style={{ color: 'inherit' }}>2. List of Experiments</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677989">Experiment 1: Summary Statistics</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677990">Experiment 2: Detecting Column Errors</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677991">Experiment 3: Clean Sample Dataset</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677992">Experiment 4: Different Chart Types</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677993">Experiment 5: Cross-Check Claims</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details style={{ background: 'transparent', border: 'none', padding: 0, margin: '0 0 1rem 0' }}>
                    <summary style={{ outline: 'none', cursor: 'pointer', fontWeight: 600, color: '#333' }}><Link href="/unit-4" style={{ color: 'inherit', textDecoration: 'none' }}>Unit 4: Coding & Writing</Link></summary>
                    <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                      <li style={{ marginBottom: '0.5rem', fontWeight: 600 }}><Link href="/unit-4#_Toc239677995" style={{ color: 'inherit' }}>1. Detailed Unit Content</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677996">4.1 AI Coding Assistants</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677997">4.2 AI Writing Assistants</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677998">4.3 Scheduling & Note-Taking</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677999">4.4 Presentation Generation</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678000">4.5 Integrating AI into Workflow</Link></li>
                      <li style={{ margin: '1rem 0 0.5rem 0', fontWeight: 600 }}><Link href="/unit-4#_Toc239678001" style={{ color: 'inherit' }}>2. List of Experiments</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678002">Experiment 1: Debug a Program</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678003">Experiment 2: Presentation Outline</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678004">Experiment 3: Write Simple Program</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678005">Experiment 4: Draft Formal Email</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678006">Experiment 5: Slide Outline Setup</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details style={{ background: 'transparent', border: 'none', padding: 0, margin: '0 0 1rem 0' }}>
                    <summary style={{ outline: 'none', cursor: 'pointer', fontWeight: 600, color: '#333' }}><Link href="/unit-5" style={{ color: 'inherit', textDecoration: 'none' }}>Unit 5: Ethics & Trends</Link></summary>
                    <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                      <li style={{ marginBottom: '0.5rem', fontWeight: 600 }}><Link href="/unit-5#_Toc239678008" style={{ color: 'inherit' }}>1. Detailed Unit Content</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678009">5.1 Bias and Hallucination</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678010">5.2 Academic Integrity</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678011">5.3 Data Privacy & DPDP Act</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678012">5.4 Copyright & IP</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678013">5.5 Emerging Trends</Link></li>
                      <li style={{ margin: '1rem 0 0.5rem 0', fontWeight: 600 }}><Link href="/unit-5#_Toc239678014" style={{ color: 'inherit' }}>2. List of Experiments</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678015">Experiment 1: Fact-Check Hallucination</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678016">Experiment 2: Citing AI Assistance</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678017">Experiment 3: Copyright/IP Concerns</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678018">Experiment 4: Identify Hallucination</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678019">Experiment 5: Draft AI Declaration</Link></li>
                      <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678020">Experiment 6: Data-Handling Policy</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="main-content">
            <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '2px solid #f0f0f0' }}>
              <img src="/logo.png" alt="Vignan Lara Autonomous Logo" style={{ maxHeight: '120px', objectFit: 'contain', boxShadow: 'none' }} />
              <h1 style={{ marginTop: '1.5rem', color: '#006400', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
                AI Tools and Applications
              </h1>
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
