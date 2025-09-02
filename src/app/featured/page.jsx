"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80" alt="Quantum Dreams NFT Collection" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Quantum Dreams</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Featured Drop</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Ethereum</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Quantum Dreams is a generative art collection exploring the intersection
                      of quantum mechanics and digital consciousness, where algorithms
                      create infinite possibilities with mathematical precision.
                    </h3>
                    <h3>
                      The collection combines cutting-edge AI technology with
                      artistic vision, creating NFTs that feel both
                      scientifically grounded and emotionally resonant.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Drop Date</p>
                        <p>March 2024</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Collection Type</p>
                        <p>Generative Art</p>
                        <p>AI-Powered</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Artist</p>
                        <p>Alex Quantum</p>
                        <p>Neural Labs</p>
                        <p>Crypto Collective</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Technical Details</p>
                        <p>1,000 unique pieces</p>
                        <p>ERC-721 standard</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Artistic Vision</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  In Quantum Dreams, each algorithm creates a unique visual
                  narrative that explores the uncertainty principle through color,
                  form, and motion. Every NFT captures a moment of quantum
                  superposition before observation collapses it into reality.
                </h3>

                <h3>
                  The generative process was designed for infinite variation:
                  neural networks, particle physics simulations, and quantum
                  randomness. These elements ensure each piece evolves organically
                  while maintaining the collection's cohesive aesthetic.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Technical Attributes</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Visual Style</p>
                      <p>Abstract</p>
                      <p>Quantum-inspired</p>
                      <p>Dynamic gradients</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Generation</p>
                      <p>AI algorithms</p>
                      <p>Procedural creation</p>
                      <p>Quantum randomness</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Rarity Traits</p>
                      <p>Quantum states</p>
                      <p>Color harmonics</p>
                      <p>Particle density</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Utility Features</p>
                      <p>Gallery access</p>
                      <p>Community voting</p>
                      <p>Future airdrops</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                  alt="Quantum Dreams NFT artwork details"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  Every NFT in the collection was generated through quantum
                  computing principles. The aim was not only to create beautiful
                  art but to explore how consciousness and computation intersect
                  in the digital realm.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
          header="Next Drop"
          callout="Built for innovation and connection"
          description="A study in digital consciousness and quantum beauty, this collection invites exploration. Art, technology, and vision come together."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
