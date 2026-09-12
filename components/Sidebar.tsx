"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [activeUnit, setActiveUnit] = useState<string | null>(null);
  const [activeHash, setActiveHash] = useState<string>('');

  // 2. Accordion Behavior: Auto-collapse inactive units.
  // Update expanded unit when pathname changes
  useEffect(() => {
    if (pathname.startsWith('/unit-1')) setActiveUnit('unit-1');
    else if (pathname.startsWith('/unit-2')) setActiveUnit('unit-2');
    else if (pathname.startsWith('/unit-3')) setActiveUnit('unit-3');
    else if (pathname.startsWith('/unit-4')) setActiveUnit('unit-4');
    else if (pathname.startsWith('/unit-5')) setActiveUnit('unit-5');
    else setActiveUnit(null);
  }, [pathname]);

  // 3. Active Scroll-Spy
  const isClickScrolling = useRef(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const anchors = document.querySelectorAll('a[id]');
      let current = '';
      
      if (window.scrollY > 50) {
        for (let i = 0; i < anchors.length; i++) {
          const rect = anchors[i].getBoundingClientRect();
          // Trigger line is 150px from the top (accounts for some top padding/headers)
          if (rect.top <= 150) {
            current = anchors[i].id;
          } else {
            break;
          }
        }
        
        // If scrolled to the absolute bottom, select the very last section
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
          if (anchors.length > 0) {
            current = anchors[anchors.length - 1].id;
          }
        }
      }
      
      setActiveHash(current ? '#' + current : '');
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]); // Re-run when page changes

  // 4. Auto-scroll sidebar to active element
  useEffect(() => {
    if (activeHash) {
      const activeLink = document.querySelector(`nav a[href$="${activeHash}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeHash]);

  // 1. Folder Click-to-Expand
  const toggleUnit = (e: React.MouseEvent, unit: string, href: string) => {
    e.preventDefault(); // Prevent default link navigation if we just want to expand/collapse
    if (activeUnit === unit) {
      setActiveUnit(null); // Collapse if already expanded
    } else {
      setActiveUnit(unit); // Expand the clicked unit
      // Navigate programmatically without hard reload
      router.push(href);
    }
  };

  const getLinkStyle = (href: string, isBold?: boolean) => {
    const hash = href.split('#')[1] ? '#' + href.split('#')[1] : '';
    const linkPath = href.split('#')[0];
    const isActive = activeHash === hash && pathname === linkPath;
    
    return {
      color: isActive ? 'red' : 'inherit',
      fontWeight: isActive ? 700 : (isBold ? 600 : 'inherit'),
      textDecoration: 'none'
    };
  };

  const handleNavClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const a = target.closest('a');
    if (a && a.href && a.href.includes('#')) {
      const hash = '#' + a.href.split('#')[1];
      setActiveHash(hash);
      isClickScrolling.current = true;
      // Clear flag after smooth scroll finishes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <nav style={{ marginTop: '2rem' }} onClick={handleNavClick}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        
        {/* Unit 1 */}
        <li>
          <div style={{ margin: '0 0 1rem 0' }}>
            <div 
              onClick={(e) => toggleUnit(e, 'unit-1', '/unit-1')}
              style={{ cursor: 'pointer', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '0.5rem', transform: activeUnit === 'unit-1' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>▶</span>
              Unit 1: Introduction
            </div>
            {activeUnit === 'unit-1' && (
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/unit-1#_Toc239677955" style={getLinkStyle('/unit-1#_Toc239677955', true)}>1. Detailed Unit Content</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677956" style={getLinkStyle('/unit-1#_Toc239677956')}>1.1 What is AI, ML, and GenAI?</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677957" style={getLinkStyle('/unit-1#_Toc239677957')}>1.2 Core Categories of AI Tools</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677958" style={getLinkStyle('/unit-1#_Toc239677958')}>1.3 How LLMs Process Responses</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677959" style={getLinkStyle('/unit-1#_Toc239677959')}>1.4 Selecting the Right AI Tool</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677960" style={getLinkStyle('/unit-1#_Toc239677960')}>1.5 Setting Up Accounts</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677961" style={getLinkStyle('/unit-1#_Toc239677961')}>1.6 Widely Used AI Tools</Link></li>
                <li style={{ margin: '1rem 0 0.5rem 0' }}><Link href="/unit-1#_Toc239677962" style={getLinkStyle('/unit-1#_Toc239677962', true)}>2. List of Experiments</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677963" style={getLinkStyle('/unit-1#_Toc239677963')}>Experiment 1: Live Comparison</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677964" style={getLinkStyle('/unit-1#_Toc239677964')}>Experiment 2: Tool Walkthrough</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677965" style={getLinkStyle('/unit-1#_Toc239677965')}>Experiment 3: Compare Platforms</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677966" style={getLinkStyle('/unit-1#_Toc239677966')}>Experiment 4: Comparison Chart</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-1#_Toc239677967" style={getLinkStyle('/unit-1#_Toc239677967')}>Experiment 5: Reflection on Task</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Unit 2 */}
        <li>
          <div style={{ margin: '0 0 1rem 0' }}>
            <div 
              onClick={(e) => toggleUnit(e, 'unit-2', '/unit-2')}
              style={{ cursor: 'pointer', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '0.5rem', transform: activeUnit === 'unit-2' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>▶</span>
              Unit 2: Prompt Engineering
            </div>
            {activeUnit === 'unit-2' && (
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/unit-2#_Toc239677969" style={getLinkStyle('/unit-2#_Toc239677969', true)}>1. Detailed Unit Content</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677970" style={getLinkStyle('/unit-2#_Toc239677970')}>2.1 Anatomy of a Good Prompt</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677971" style={getLinkStyle('/unit-2#_Toc239677971')}>2.2 Zero-Shot & Few-Shot Prompting</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677972" style={getLinkStyle('/unit-2#_Toc239677972')}>2.3 Role-Based Prompts</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677973" style={getLinkStyle('/unit-2#_Toc239677973')}>2.4 Iterative Refinement</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677974" style={getLinkStyle('/unit-2#_Toc239677974')}>2.5 AI for Brainstorming & Drafting</Link></li>
                <li style={{ margin: '1rem 0 0.5rem 0' }}><Link href="/unit-2#_Toc239677975" style={getLinkStyle('/unit-2#_Toc239677975', true)}>2. List of Experiments</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677976" style={getLinkStyle('/unit-2#_Toc239677976')}>Experiment 1: Refining Prompts</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677977" style={getLinkStyle('/unit-2#_Toc239677977')}>Experiment 2: Few-Shot Prompts</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677978" style={getLinkStyle('/unit-2#_Toc239677978')}>Experiment 3: Compare Prompts</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677979" style={getLinkStyle('/unit-2#_Toc239677979')}>Experiment 4: Summarise Article</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-2#_Toc239677980" style={getLinkStyle('/unit-2#_Toc239677980')}>Experiment 5: Chain-of-Thought Prompt</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Unit 3 */}
        <li>
          <div style={{ margin: '0 0 1rem 0' }}>
            <div 
              onClick={(e) => toggleUnit(e, 'unit-3', '/unit-3')}
              style={{ cursor: 'pointer', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '0.5rem', transform: activeUnit === 'unit-3' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>▶</span>
              Unit 3: Data Analysis
            </div>
            {activeUnit === 'unit-3' && (
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/unit-3#_Toc239677982" style={getLinkStyle('/unit-3#_Toc239677982', true)}>1. Detailed Unit Content</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677983" style={getLinkStyle('/unit-3#_Toc239677983')}>3.1 AI-Assisted Spreadsheet Analysis</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677984" style={getLinkStyle('/unit-3#_Toc239677984')}>3.2 Natural-Language Querying</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677985" style={getLinkStyle('/unit-3#_Toc239677985')}>3.3 Generating Charts</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677986" style={getLinkStyle('/unit-3#_Toc239677986')}>3.4 Interpreting Summaries</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677987" style={getLinkStyle('/unit-3#_Toc239677987')}>3.5 Correcting Errors</Link></li>
                <li style={{ margin: '1rem 0 0.5rem 0' }}><Link href="/unit-3#_Toc239677988" style={getLinkStyle('/unit-3#_Toc239677988', true)}>2. List of Experiments</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677989" style={getLinkStyle('/unit-3#_Toc239677989')}>Experiment 1: Summary Statistics</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677990" style={getLinkStyle('/unit-3#_Toc239677990')}>Experiment 2: Detecting Column Errors</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677991" style={getLinkStyle('/unit-3#_Toc239677991')}>Experiment 3: Clean Sample Dataset</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677992" style={getLinkStyle('/unit-3#_Toc239677992')}>Experiment 4: Different Chart Types</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-3#_Toc239677993" style={getLinkStyle('/unit-3#_Toc239677993')}>Experiment 5: Cross-Check Claims</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Unit 4 */}
        <li>
          <div style={{ margin: '0 0 1rem 0' }}>
            <div 
              onClick={(e) => toggleUnit(e, 'unit-4', '/unit-4')}
              style={{ cursor: 'pointer', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '0.5rem', transform: activeUnit === 'unit-4' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>▶</span>
              Unit 4: Coding & Writing
            </div>
            {activeUnit === 'unit-4' && (
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/unit-4#_Toc239677995" style={getLinkStyle('/unit-4#_Toc239677995', true)}>1. Detailed Unit Content</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677996" style={getLinkStyle('/unit-4#_Toc239677996')}>4.1 AI Coding Assistants</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677997" style={getLinkStyle('/unit-4#_Toc239677997')}>4.2 AI Writing Assistants</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677998" style={getLinkStyle('/unit-4#_Toc239677998')}>4.3 Scheduling & Note-Taking</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239677999" style={getLinkStyle('/unit-4#_Toc239677999')}>4.4 Presentation Generation</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678000" style={getLinkStyle('/unit-4#_Toc239678000')}>4.5 Integrating AI into Workflow</Link></li>
                <li style={{ margin: '1rem 0 0.5rem 0' }}><Link href="/unit-4#_Toc239678001" style={getLinkStyle('/unit-4#_Toc239678001', true)}>2. List of Experiments</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678002" style={getLinkStyle('/unit-4#_Toc239678002')}>Experiment 1: Debug a Program</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678003" style={getLinkStyle('/unit-4#_Toc239678003')}>Experiment 2: Presentation Outline</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678004" style={getLinkStyle('/unit-4#_Toc239678004')}>Experiment 3: Write Simple Program</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678005" style={getLinkStyle('/unit-4#_Toc239678005')}>Experiment 4: Draft Formal Email</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-4#_Toc239678006" style={getLinkStyle('/unit-4#_Toc239678006')}>Experiment 5: Slide Outline Setup</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Unit 5 */}
        <li>
          <div style={{ margin: '0 0 1rem 0' }}>
            <div 
              onClick={(e) => toggleUnit(e, 'unit-5', '/unit-5')}
              style={{ cursor: 'pointer', fontWeight: 600, color: '#333', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginRight: '0.5rem', transform: activeUnit === 'unit-5' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>▶</span>
              Unit 5: Ethics & Trends
            </div>
            {activeUnit === 'unit-5' && (
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem', listStyleType: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/unit-5#_Toc239678008" style={getLinkStyle('/unit-5#_Toc239678008', true)}>1. Detailed Unit Content</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678009" style={getLinkStyle('/unit-5#_Toc239678009')}>5.1 Bias and Hallucination</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678010" style={getLinkStyle('/unit-5#_Toc239678010')}>5.2 Academic Integrity</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678011" style={getLinkStyle('/unit-5#_Toc239678011')}>5.3 Data Privacy & DPDP Act</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678012" style={getLinkStyle('/unit-5#_Toc239678012')}>5.4 Copyright & IP</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678013" style={getLinkStyle('/unit-5#_Toc239678013')}>5.5 Emerging Trends</Link></li>
                <li style={{ margin: '1rem 0 0.5rem 0' }}><Link href="/unit-5#_Toc239678014" style={getLinkStyle('/unit-5#_Toc239678014', true)}>2. List of Experiments</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678015" style={getLinkStyle('/unit-5#_Toc239678015')}>Experiment 1: Fact-Check Hallucination</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678016" style={getLinkStyle('/unit-5#_Toc239678016')}>Experiment 2: Citing AI Assistance</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678017" style={getLinkStyle('/unit-5#_Toc239678017')}>Experiment 3: Copyright/IP Concerns</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678018" style={getLinkStyle('/unit-5#_Toc239678018')}>Experiment 4: Identify Hallucination</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678019" style={getLinkStyle('/unit-5#_Toc239678019')}>Experiment 5: Draft AI Declaration</Link></li>
                <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem' }}><Link href="/unit-5#_Toc239678020" style={getLinkStyle('/unit-5#_Toc239678020')}>Experiment 6: Data-Handling Policy</Link></li>
              </ul>
            )}
          </div>
        </li>

      </ul>
    </nav>
  );
}
