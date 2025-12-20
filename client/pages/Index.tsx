import { Check, X } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#942327] text-white py-4">
        <div className="max-w-7xl mx-auto px-2 text-center">
          <h1 className="text-xl font-semibold tracking-wide">Heart Health Journal</h1>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-2 mt-4">
        <p className="text-sm text-gray-500">Home &gt; Health &gt; Cholesterol Management</p>
      </div>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-2 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Merriweather, serif' }}>
            7 Reasons I Finally Swapped My Statin For This As A Cardiologist With High Cholesterol
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F16f2727152594a409b4b6333216ba502?format=webp&width=800"
              alt="Dr. Sarah Chen"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                By Dr. Sarah Chen, MD, FACC
              </p>
            </div>
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Summary/Intro */}
          <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
            <strong>Summary:</strong> I spent 23 years prescribing statins and 8 years taking them myself. My numbers looked perfect on paper, but I felt exhausted, brain-fogged, and older than my years. I realized that standard treatment was missing the bigger picture. That's why I switched to Lunessa—a clinical-strength combination of 2400mg red yeast rice and 200mg CoQ10. Here is why.
          </p>
        </section>

        {/* Point 1: It Addresses The "3-Part Problem" Statins Miss */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                1. It Addresses The "3-Part Problem" Statins Miss
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                I learned the hard way that high cholesterol isn't just about overproduction. It is a three-part failure: Overproduction, Poor Clearance, and Oxidation. Statins only stop your liver from producing cholesterol, but they do nothing to help clear what is already circulating or stop it from oxidizing. Lunessa's red yeast rice addresses production and activates clearance receptors, while the CoQ10 prevents dangerous oxidation—targeting all three mechanisms at once.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fa39b0bb6a38a4492826f3c6b9bf857d0?format=webp&width=800"
                alt="Lunessa gummies"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 2: It Doesn't Cause A "Cellular Energy Crisis" */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            2. It Doesn't Cause A "Cellular Energy Crisis"
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Statins work by blocking an enzyme called HMG-CoA reductase. The problem? That same enzyme produces CoQ10, which powers every cell in your body. When you take a statin, you are essentially starving your muscle and brain cells of energy. Lunessa delivers a therapeutic 200mg dose of CoQ10 per serving, replacing what is lost and preventing the fatigue and muscle pain that plague so many patients.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F39353efe158844e89ceec11d415ed200?format=webp&width=800"
                alt="Mitochondria and cellular energy visualization"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 3: It Stops The "Silent Killer": Oxidized LDL */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            3. It Stops The "Silent Killer": Oxidized LDL
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                We obsess over the total LDL number, but oxidized LDL is what actually creates plaque and kills you. Because statins deplete your body's natural antioxidants (CoQ10), they can inadvertently leave the remaining cholesterol vulnerable to oxidation. Lunessa provides the antioxidant support needed to keep cholesterol from becoming "sticky" and dangerous.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F954120b99036490190ecafc0f8685263?format=webp&width=800"
                alt="Non-oxidized LDL vs Oxidized LDL artery comparison"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 4: It Offers Clinical Potency (Not Drugstore "Dusting") */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            4. It Offers Clinical Potency (Not Drugstore "Dusting")
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Most red yeast rice supplements are worthless because they contain negligible active compounds or dangerous contaminants like citrinin. Lunessa is the first formula I found that meets clinical standards: 2400mg of red yeast rice per serving, third-party tested, and verified citrinin-free. It is medical-grade precision, not marketing hype.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F78598b2183c545b6af46685ce50714fc?format=webp&width=800"
                alt="Lunessa Red Yeast Rice + CoQ10 supplement bottle"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 5: You Actually Want To Take It (Compliance = Results) */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                5. You Actually Want To Take It (Compliance = Results)
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                To get 2400mg of active ingredients, you would normally have to choke down huge horse pills. Lunessa uses a precision-engineered gummy format. It sounds trivial, but compliance is the #1 reason treatment fails. Because they are easy to take and taste good, my patients (and I) never miss a dose.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2Fa5c347b7763a487aa36a7f06001eea7e?format=webp&width=800"
                alt="Lunessa raspberry-flavored gummy"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 6: It Gave Me My Brain Back */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            6. It Gave Me My Brain Back
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                After eight years on Crestor, I struggled to remember patient names and felt a constant brain fog. Within weeks of switching to Lunessa, that fog lifted. I was sleeping 7 hours a night, remembering details again, and waking up feeling human. You don't have to choose between heart health and mental clarity.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F56eb022fa8f44cecb08e95eff1d0d2b3?format=webp&width=800"
                alt="Person working with mental clarity and focus"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 7: It's Completely Risk-Free (Unlike Prescriptions) */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                7. It's Completely Risk-Free (Unlike Prescriptions)
              </h2>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                When you start a prescription, there is no "trial period." You are just a patient for life. Lunessa comes with a 90-Day Money-Back Guarantee. You can try it, track your energy, and even get your lipids tested. If you don't see the numbers drop and feel the energy return, you get a full refund.
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

          {/* The Verdict */}
          <div className="mt-8 p-6 bg-[#fef2f2] border-l-4 border-[#942327] rounded-r-lg">
            <p className="text-lg font-bold leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
              The Verdict: My LDL is stable at 84—lower than when I was on 80mg of Crestor—but I have my life back.
            </p>
          </div>
        </section>

        {/* Social Proof / Testimonials Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Merriweather, serif' }}>
            Why 47,000+ People Trust Lunessa™
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">Margaret T.</p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">Verified Buyer</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                "My doctor put me on statins three years ago. Within six months, I could barely climb stairs without my legs burning. I told him about it, and he said 'that's just part of aging.' I'm 52, not 82. I found Lunessa while researching alternatives. 2400mg of red yeast rice and 200mg of CoQ10 per serving, third-party tested, in gummy form so I didn't have to choke down more pills. I figured I had nothing to lose. Within three weeks, the muscle pain started easing up. After two months, my energy came back. I got my cholesterol tested at three months—my numbers were better than they'd been on statins, and I felt like myself again for the first time in years. I'm not saying it's magic, but it's the only thing that's actually worked without making me feel like I'm falling apart."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">David K.</p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">Verified Buyer</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                "I'm a software engineer, so when I started forgetting simple things and losing words mid-sentence on statins, I knew something was wrong. My doctor insisted it wasn't the medication, but the timing was too obvious. I stopped taking them and started researching. Found out about the whole CoQ10 depletion issue—how statins block the same pathway your brain needs to function. That's when I found Lunessa. The gummy format made it easy to actually take consistently, unlike those horse-sized statin pills I dreaded every morning. After about six weeks, the brain fog lifted. I can think clearly again, my memory is back, and my last cholesterol panel came back in a healthy range. I wish I'd known about this years ago."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">Patricia H.</p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">Verified Buyer</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                "I have familial hypercholesterolemia—it runs in my family. My mother, my grandmother, both on statins their entire adult lives. Both dealt with muscle weakness, both complained about feeling exhausted all the time. I thought that was just my genetic destiny. When my doctor handed me a statin prescription at 34, I was terrified I was starting down the same path. I gave Lunessa a try instead—clinical dosing based on actual research, certified citrinin-free, and in a form I could actually take every day without feeling sick. My cholesterol dropped 47 points in three months. No muscle pain. No exhaustion. No brain fog. I actually have energy to play with my kids after work now. For the first time in my life, I feel like I broke the family curse."
              </p>
            </div>
          </div>
        </section>

        {/* CTA / Offer Section */}
        <section className="border-4 border-dashed border-gray-300 p-8 rounded-lg mb-12 relative bg-gray-50">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
              BUY 2 GET 1 FREE
            </h2>
            <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              This exclusive offer is in high demand and inventory keeps selling out.
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
              <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg mb-4 transition-all">
                Claim Buy 2 Get 1 Free →
              </button>
              <p className="text-sm mb-2">
                <span className="font-bold">Sell-Out Risk: <span className="text-red-600">High</span></span> | <span className="text-green-600 font-bold">FREE Shipping</span>
              </p>
              <p className="text-sm text-gray-700 font-semibold">
                Try Lunessa today with a 90-Day Money Back Guarantee!
              </p>
            </div>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <footer className="border-t border-gray-300 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <strong>MEDICAL & HEALTH DISCLAIMER:</strong> The information and other content provided on this page, or in any linked materials, are not intended and should not be construed as medical advice, nor is the information a substitute for professional medical expertise or treatment. If you or any other person has a medical concern, you should consult with your health care provider or seek other professional medical treatment immediately. Never disregard professional medical advice or delay in seeking it because of something you have read on this page or in any linked materials. If you think you may have a medical emergency, call your doctor or emergency services immediately.
          </p>
        </footer>
      </main>
    </div>
  );
}
