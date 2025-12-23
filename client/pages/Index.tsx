import { Check, X } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#942327] text-white py-4">
        <div className="max-w-7xl mx-auto px-2 text-center">
          <h1 className="text-xl font-semibold tracking-wide">
            Heart Health Journal
          </h1>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-2 mt-4">
        <p className="text-sm text-gray-500">
          Home &gt; Health &gt; Cholesterol Management
        </p>
      </div>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-2 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            7 Clinical Criteria I Use When Recommending Red Yeast Rice + CoQ10 to My Cardiology Patients
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F16f2727152594a409b4b6333216ba502?format=webp&width=800"
              alt="Dr. Sarah Chen"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p
                className="font-semibold text-gray-900"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                By Dr. Sarah Chen, MD, FACC — Preventative Cardiologist
              </p>
            </div>
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Summary/Intro */}
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            After 23 years in preventative cardiology, I walked away from a system that prioritizes pharmaceutical profits over patient outcomes. I've watched 50-60% of my patients discontinue statins within 18 months due to myalgia, cognitive complaints, and fatigue—side effects the industry dismisses as "necessary trade-offs." I refused to accept that narrative. For statin-intolerant patients, I developed a protocol using red yeast rice combined with CoQ10—but not all formulations meet clinical standards. Here are the seven criteria I require:
          </p>
        </section>

        {/* Criterion 1: Standardized Monacolin K Content */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 md:order-1">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                1. Standardized Monacolin K Content: Minimum 2400mg Red Yeast Rice Per Serving
              </h2>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                Most commercial red yeast rice supplements contain 600mg or 1200mg per capsule—doses that show minimal efficacy in clinical trials. The published literature demonstrates that 2400mg daily achieves LDL reductions of 20-35%, comparable to low-dose statin therapy. I will not recommend formulations below this threshold.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                Underdosing creates patient frustration and reinforces skepticism about natural alternatives. <strong>Lunessa delivers 2400mg of red yeast rice per serving</strong>, meeting the clinical standard established in peer-reviewed studies.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fe066a97969ad4f6b97f1994bb4cf135d?format=webp&width=800"
                alt="Red yeast rice"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Criterion 2: Verified Citrinin-Free Certification */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            2. Verified Citrinin-Free Certification
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                Citrinin is a nephrotoxic mycotoxin that can contaminate poorly manufactured red yeast rice. While rare, citrinin toxicity presents as renal tubular damage and is entirely preventable with proper manufacturing protocols.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                I require third-party verification that each batch tests below detectable limits for citrinin contamination. This is non-negotiable for patient safety. <strong>Lunessa is certified citrinin-free</strong> with third-party testing documentation available on request.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F39353efe158844e89ceec11d415ed200?format=webp&width=800"
                alt="Third-party testing certification"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Criterion 3: Therapeutic CoQ10 Ratio */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            3. Therapeutic CoQ10 Ratio: 200mg CoQ10 Per 2400mg Red Yeast Rice
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                Red yeast rice contains monacolin K, which inhibits HMG-CoA reductase—the same mechanism as lovastatin. This pathway also produces CoQ10, meaning red yeast rice depletes CoQ10 exactly as statins do.
              </p>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                The clinical problem my patients experience—myalgia, fatigue, cognitive dysfunction—is CoQ10 depletion, not the cholesterol reduction itself. Most combination products include 30mg, 50mg, or 100mg of CoQ10, which is insufficient to prevent depletion symptoms.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                I recommend 200mg of CoQ10 per 2400mg of red yeast rice based on the ratio that prevents myalgia in clinical trials. <strong>Lunessa provides 200mg of CoQ10 per serving</strong>, matching the therapeutic ratio required to prevent statin-like side effects.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F8bf672d855c34a67abbbad849909d896?format=webp&width=800"
                alt="HMG-CoA Reductase mechanism in liver"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Criterion 4: Compliance-Optimized Delivery Format */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            4. Compliance-Optimized Delivery Format
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                The most effective intervention is the one patients actually take consistently. I've had patients discontinue treatment within weeks because they couldn't swallow large capsules or experienced gastric distress from powder formulations.
              </p>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                Compliance technology matters as much as ingredient quality. If the delivery format creates friction, adherence drops and clinical outcomes suffer.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                <strong>Lunessa uses a gummy format</strong> that eliminates swallowing difficulties and improves long-term compliance. This may seem trivial, but compliance rates directly correlate with clinical success in my patient population.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fa5c347b7763a487aa36a7f06001eea7e?format=webp&width=800"
                alt="Lunessa gummy supplement"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Criterion 5: Third-Party Testing Protocols */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                5. Third-Party Testing Protocols Beyond Label Claims
              </h2>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                I require independent verification of:
              </p>
              <ul className="list-disc list-inside leading-relaxed mb-4" style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}>
                <li>Active ingredient content (monacolin K standardization)</li>
                <li>Heavy metal screening (lead, mercury, arsenic, cadmium)</li>
                <li>Microbial contamination testing</li>
                <li>Citrinin absence verification</li>
              </ul>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                Supplement labels are notoriously unreliable. I will only recommend formulations with publicly available third-party testing documentation. <strong>Lunessa publishes third-party test results</strong> for each production batch, providing transparency that most supplement manufacturers avoid.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F78598b2183c545b6af46685ce50714fc?format=webp&width=800"
                alt="Third-party testing and quality control"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Criterion 6: Clinical Trial Alignment */}
        <section className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            6. Clinical Trial Alignment: Evidence-Based Dosing
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                I don't recommend formulations based on marketing claims. I require that dosing aligns with published clinical trials demonstrating efficacy.
              </p>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                The studies showing 20-35% LDL reduction use 2400mg of red yeast rice daily. The studies preventing CoQ10 depletion symptoms use 100-200mg of CoQ10 daily. Any formulation deviating significantly from these parameters lacks clinical support.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                <strong>Lunessa's formulation matches the dosing used in clinical research</strong>, not arbitrary amounts chosen for cost optimization or marketing differentiation.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F2f251320bed641e8870909f7c89bb250?format=webp&width=800"
                alt="Cholesterol oxidation in blood vessels"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Criterion 7: Patient Outcome Verification */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                7. Patient Outcome Verification: Trackable Lipid Response
              </h2>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                I require patients on any cholesterol management protocol—pharmaceutical or natural—to obtain lipid panels at baseline, 8 weeks, and 12 weeks. This isn't optional.
              </p>
              <p
                className="leading-relaxed mb-4"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                Red yeast rice + CoQ10 should produce measurable LDL reduction within 8-12 weeks. If it doesn't, either the formulation is inadequate or the patient requires a different intervention.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333333",
                }}
              >
                <strong>Lunessa offers a 90-day money-back guarantee</strong>, which aligns perfectly with the clinical timeframe needed to assess lipid response. Patients can verify results with laboratory testing before committing long-term.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F1cfac38d8c2041679afdfd2384e6c66a?format=webp&width=800"
                alt="Three bottles of Lunessa Red Yeast Rice + CoQ10 gummies"
                className="w-full h-64 object-contain rounded-lg"
              />
              {/* 90-Day Guarantee Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg border-4 border-white">
                <p className="text-xs font-bold">90-Day</p>
                <p className="text-[10px] font-semibold">Money-Back</p>
                <p className="text-xs font-bold">Guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Outcomes in My Practice */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Clinical Outcomes in My Practice
          </h2>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            Since implementing this protocol with qualifying patients, I've observed:
          </p>
          <ul className="list-disc list-inside leading-relaxed mb-6 text-lg" style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#333333",
            }}>
            <li>LDL reductions of 22-34% in statin-intolerant patients using Lunessa</li>
            <li>Elimination of myalgia complaints in patients who experienced muscle pain on statins</li>
            <li>Improved treatment adherence compared to traditional statin protocols</li>
            <li>Restoration of CoQ10 levels verified by plasma testing in select patients</li>
            <li>Patient-reported improvements in energy, cognitive clarity, and exercise tolerance</li>
          </ul>
          <p
            className="text-lg leading-relaxed"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            I now have over 200 patients following this protocol. Most maintain therapeutic LDL levels without the side effects that caused them to discontinue pharmaceutical statins.
          </p>
        </section>

        {/* Who This Protocol Is For */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Who This Protocol Is For
          </h2>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            I recommend red yeast rice + CoQ10 combinations specifically for:
          </p>
          <ul className="list-disc list-inside leading-relaxed mb-6 text-lg" style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#333333",
            }}>
            <li>Statin-intolerant patients with documented myalgia, cognitive dysfunction, or fatigue on pharmaceutical therapy</li>
            <li>Patients refusing statin therapy who understand cardiovascular risk and want evidence-based natural alternatives</li>
            <li>Borderline-high LDL patients (130-160 mg/dL) who want to avoid pharmaceuticals initially</li>
            <li>Patients with familial hypercholesterolemia seeking adjunctive therapy or statin dose reduction under medical supervision</li>
          </ul>
          <p
            className="text-lg leading-relaxed"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            This is not appropriate for patients with severe hypercholesterolemia requiring aggressive pharmaceutical intervention, or those with established cardiovascular disease needing maximum risk reduction.
          </p>
        </section>

        {/* Why Most Cardiologists Don't Recommend This */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Why Most Cardiologists Don't Recommend This
          </h2>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            The cardiovascular medicine paradigm is built on pharmaceutical statins—and the financial incentives that keep them there. Medical school curricula, residency training, fellowship programs, and continuing education are all funded by pharmaceutical companies promoting statin-first protocols.
          </p>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            Most cardiologists are trained to follow guidelines written by committees with pharmaceutical conflicts of interest. They're unfamiliar with red yeast rice clinical literature because it doesn't appear in industry-sponsored journals or CME courses. The system rewards prescription writing, not patient outcomes.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            I spent two years reviewing the evidence before developing this protocol—evidence the industry ignores because it threatens their profit model. The clinical data supports red yeast rice + CoQ10 as a legitimate option for specific patient populations. I chose patients over protocols.
          </p>
        </section>

        {/* The Formulation I Recommend */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            The Formulation I Recommend
          </h2>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            After evaluating multiple products against these seven criteria, <strong>Lunessa is the only formulation I recommend to my patients.</strong>
          </p>
          <ul className="list-disc list-inside leading-relaxed mb-6 text-lg" style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#333333",
            }}>
            <li>2400mg red yeast rice per serving (clinical dosing)</li>
            <li>200mg CoQ10 per serving (therapeutic ratio)</li>
            <li>Certified citrinin-free (third-party verified)</li>
            <li>Gummy format (compliance-optimized)</li>
            <li>Third-party tested (transparent documentation)</li>
            <li>Evidence-aligned dosing (matches clinical trials)</li>
            <li>90-day guarantee (sufficient time for lipid panel verification)</li>
          </ul>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            I have no financial relationship with this company—no speaking fees, no consulting agreements, no stock options. Unlike the pharmaceutical-funded guidelines most cardiologists follow, I recommend Lunessa because it's the only product meeting the clinical standards I require for patient safety and efficacy.
          </p>
        </section>

        {/* What I Tell My Patients */}
        <section className="mb-12">
          <div className="p-6 bg-[#fef2f2] border-l-4 border-[#942327] rounded-r-lg">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              What I Tell My Patients
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
            >
              "If you're statin-intolerant or refusing pharmaceutical therapy, we can try red yeast rice with CoQ10 under medical supervision. I'll need baseline labs, an 8-week follow-up panel, and a 12-week confirmation. If your LDL drops 20-30% and you feel better, we continue. If not, we adjust the protocol.
            </p>
            <p
              className="text-lg leading-relaxed font-semibold"
              style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
            >
              This isn't 'natural medicine' versus 'conventional medicine.' It's evidence-based intervention using compounds with clinical data supporting efficacy—compounds the pharmaceutical industry can't patent and profit from."
            </p>
            <p
              className="text-lg leading-relaxed mt-4"
              style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
            >
              That's what medicine should be: evidence-driven, patient-centered, and free from corporate influence.
            </p>
          </div>
        </section>

        {/* Patient Results / Testimonials Section */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Patient Results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">Margaret T.</p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">Patient Since 2023</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p
                className="text-sm leading-relaxed text-gray-700"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                "My cardiologist gave me the Lunessa protocol after I quit statins due to muscle pain. Within three months, my LDL dropped from 184 to 132. No muscle issues. She monitors my labs every six months and everything stays stable."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">David K.</p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">Patient Since 2024</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p
                className="text-sm leading-relaxed text-gray-700"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                "I refused statins after watching my father deteriorate on them. My doctor introduced me to Dr. Chen's protocol using Lunessa. Sixteen weeks later, my LDL went from 198 to 141. My cardiologist said 'whatever you're doing, keep doing it.'"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">Patricia H.</p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">Patient Since 2024</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p
                className="text-sm leading-relaxed text-gray-700"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                "I have familial hypercholesterolemia and thought I'd need statins forever. Dr. Chen prescribed Lunessa alongside diet modifications. Three months: LDL down 52 points. No side effects. First time in my life I've had normal cholesterol without feeling terrible."
              </p>
            </div>
          </div>
        </section>

        {/* Try Lunessa Risk-Free */}
        <section className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Try Lunessa Risk-Free
          </h2>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            Lunessa offers a 90-day money-back guarantee, which provides sufficient time to:
          </p>
          <ul className="list-disc list-inside leading-relaxed mb-6 text-lg" style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#333333",
            }}>
            <li>Obtain baseline lipid panel</li>
            <li>Take Lunessa consistently for 8-12 weeks</li>
            <li>Obtain follow-up lipid panel</li>
            <li>Assess both laboratory results and symptom improvement</li>
          </ul>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ fontFamily: "Open Sans, sans-serif", color: "#333333" }}
          >
            If you don't achieve measurable LDL reduction and feel better, request a full refund. This is how evidence-based medicine works: verify results, adjust accordingly.
          </p>
        </section>

        {/* CTA / Offer Section */}
        <section className="border-4 border-dashed border-gray-300 p-8 rounded-lg mb-12 relative bg-gray-50">
          <div className="text-center mb-6">
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              BUY 2 GET 1 FREE
            </h2>
            <p
              className="text-gray-600"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              This exclusive offer is in high demand and inventory keeps selling
              out.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            {/* Product Image with Badges */}
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F83b41a759ee24f298e7abd7a5f43a5e3?format=webp&width=800"
                alt="Lunessa Red Yeast Rice + CoQ10 - Buy 2 Get 1 Free"
                className="w-full max-w-2xl h-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <a
                href="https://shoplunessa.store/products/lunessa"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#942327] hover:bg-[#7a1d21] text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg mb-4 transition-all"
              >
                Claim Buy 2 Get 1 Free →
              </a>
              <p className="text-sm mb-2">
                <span className="font-bold">
                  Sell-Out Risk: <span className="text-red-600">High</span>
                </span>{" "}
                |{" "}
                <span className="text-green-600 font-bold">FREE Shipping</span>
              </p>
              <p className="text-sm text-gray-700 font-semibold">
                Try Lunessa today with a 90-Day Money-Back Guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <footer className="border-t border-gray-300 pt-6">
          <p
            className="text-xs text-gray-500 leading-relaxed"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <strong>MEDICAL & HEALTH DISCLAIMER:</strong> The information and
            other content provided on this page, or in any linked materials, are
            not intended and should not be construed as medical advice, nor is
            the information a substitute for professional medical expertise or
            treatment. If you or any other person has a medical concern, you
            should consult with your health care provider or seek other
            professional medical treatment immediately. Never disregard
            professional medical advice or delay in seeking it because of
            something you have read on this page or in any linked materials. If
            you think you may have a medical emergency, call your doctor or
            emergency services immediately.
          </p>
        </footer>
      </main>
    </div>
  );
}
