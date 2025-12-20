import { Check, X } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#5B9BD5] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-xl font-semibold tracking-wide">Heart Health Journal</h1>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-[700px] mx-auto px-4 mt-4">
        <p className="text-sm text-gray-500">Home &gt; Health &gt; Cholesterol Management</p>
      </div>

      {/* Main Content Container */}
      <main className="max-w-[700px] mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Merriweather, serif' }}>
            7 Reasons Why Thousands Are Ditching Statins for this Natural Alternative
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/placeholder.svg"
              alt="Dr. Michael James"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                By Dr. Michael James
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Cardiovascular Health Specialist
              </p>
            </div>
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Summary/Intro */}
          <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
            <strong>Summary:</strong> If your doctor has ever handed you a statin prescription, you already know they rarely mention the muscle pain, memory fog, or complete CoQ10 depletion that comes with it. That's why over thousands have switched to Lunessa instead—a clinically-dosed combination of 2400mg red yeast rice and 200mg CoQ10 per serving in gummy form that supports healthy cholesterol without the side effects.
          </p>
        </section>

        {/* Point 1: Statins Don't Address Why Your Cholesterol Is High */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                1. Statins Don't Address Why Your Cholesterol Is High
              </h2>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Most doctors treat high cholesterol like a plumbing problem—too much cholesterol floating around, so block the production and call it fixed. But here's what they're missing: your body makes cholesterol for a reason. If you're overproducing it, something deeper is wrong. Statins force your liver to stop making cholesterol, but they don't fix the inflammation, the oxidative stress, or the poor clearance mechanisms that created the problem. That's why so many people see their numbers creep back up over time, or why they need higher and higher doses just to maintain the same results.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Lunessa works differently. The 2400mg of red yeast rice per serving helps moderate cholesterol production naturally, while the 200mg of CoQ10 per serving addresses the oxidative damage that makes cholesterol dangerous in the first place. It's not about forcing your body to stop doing something—it's about supporting the mechanisms that keep cholesterol balanced naturally.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/placeholder.svg"
                alt="Cholesterol and heart health concept"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 2: It Fixes What Surgery Misses */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            2. It Fixes What Surgery Misses
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Carpal tunnel pain starts when swelling and pressure build around the <strong>median nerve</strong>. Surgery cuts the ligament to make more space, which can help for a while, but it doesn't fix the inflammation that causes the pressure. TheraWrap uses <strong>red and near-infrared light</strong> to reduce swelling, improve blood flow, and help the nerve heal naturally so the pain doesn't return.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Scientific diagram showing light therapy penetrating skin layers"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 3: No Recovery Time or Missed Work */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            3. No Recovery Time or Missed Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Surgery can keep you out of work or your normal routine for weeks. You might need physical therapy and help with daily tasks while you recover. <strong>TheraWrap gives you relief without sacrificing your life</strong>. You can use it today and go about your normal schedule immediately. No bandages. No downtime.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/placeholder.svg"
                alt="Active woman playing pickleball or tennis"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 4: It's Safe and Scientifically Proven */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            4. It's Safe and Scientifically Proven
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                The same light therapy technology used in TheraWrap was originally developed by <strong>NASA</strong> and is now used by <strong>doctors, physical therapists, and athletes</strong> around the world. It's safe, non-invasive, and backed by years of research showing its ability to reduce pain and inflammation. TheraWrap takes that same science and makes it simple enough to use at home, without needing expensive clinical treatments.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Doctor holding TheraWrap device"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 5: It's Easy to Use and Works Fast */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                5. It's Easy to Use and Works Fast
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                TheraWrap fits right into your day. Just slip it on, press one button, and <strong>relax for 15 minutes</strong>. You can use it while reading, watching TV, or winding down before bed. Users say they often feel gentle warmth and soothing relief within the first few sessions. It's not complicated, it's not time-consuming, and it doesn't require medical appointments or long instructions.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/placeholder.svg"
                alt="Woman relaxing on couch using TheraWrap device"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 6: It's Affordable Compared to Surgery */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            6. It's Affordable Compared to Surgery
          </h2>
          <p className="leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
            <strong>Surgery can cost thousands of dollars</strong>, especially if insurance doesn't cover everything. Even with coverage, you're often left with expensive co-pays and therapy bills afterward. <strong>TheraWrap costs a fraction of that</strong> and can be used over and over again. You're getting long-term relief at a price most people can actually afford.
          </p>

          {/* Comparison Graphic */}
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
            <div className="text-center">
              <div className="relative mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Surgery operating room"
                  className="w-full h-40 object-cover rounded-lg grayscale opacity-60"
                />
                <div className="absolute top-2 right-2 bg-red-500 rounded-full p-2">
                  <X className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="font-bold text-red-600 text-lg">Expensive</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <img
                  src="/placeholder.svg"
                  alt="TheraWrap device on hand"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-green-500 rounded-full p-2">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="font-bold text-green-600 text-lg">Affordable</p>
            </div>
          </div>
        </section>

        {/* Point 7: It's Completely Risk-Free to Try */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                7. It's Completely Risk-Free to Try
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Surgery is a one-way street. Once it's done, there's no going back. TheraWrap is the opposite. <strong>You can try it at home for 90 days with a full money-back guarantee</strong>. If you don't notice a difference — less pain, better movement, improved sleep — you can return it for a full refund. There's no risk, no pressure, and no long-term commitment. Just a real chance to feel normal again.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <img
                src="/placeholder.svg"
                alt="TheraWrap device on hand"
                className="w-full h-64 object-cover rounded-lg"
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

        {/* Social Proof / Testimonials Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Merriweather, serif' }}>
            Why 15,200+ People Are Choosing TheraWrap™
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Anne M."
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">Anne M.</p>
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
                "My husband had carpal tunnel surgery last year and still complains about stiffness... I didn't want to go through that. When I read about TheraWrap, I figured I had nothing to lose. The first time I used it, I felt this warm, soothing sensation. It's been about a month now, and I can finally hold my coffee mug without that sharp shooting pain. I'm not saying it's a miracle, but that's the only thing that's actually worked for me."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Sean T."
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">Sean T.</p>
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
                "I work construction, so when my hands started tingling, I thought it was just overuse. But it got to the point where I couldn't even hold my tools. My doctor said surgery might help but I can't afford to be off work. A buddy from my crew told me about this wrist wrap. It's simple—I use it every night while watching TV. My grip strength is back, and the numbness is almost gone. It's seriously a lifesaver."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Brittany H."
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-gray-900">Brittany H.</p>
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
                "I've had wrist and hand pain ever since I got pregnant... It got so bad I couldn't lift my daughter without sharp shooting pain. I was scared to try anything that wasn't approved by my doctor, but when I read it was developed by NASA and used by doctors, I felt safer. After just a few uses I already noticed the constant burning started easing up. Now I can finally hold my baby without wincing. That alone makes it worth every penny."
              </p>
            </div>
          </div>
        </section>

        {/* CTA / Offer Section */}
        <section className="border-4 border-dashed border-gray-300 p-8 rounded-lg mb-12 relative bg-gray-50">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
              Limited Time Offer
            </h2>
            <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              This exclusive deal is in high demand and stock keeps sells out.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            {/* Product Image with Badges */}
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="TheraWrap Device"
                className="w-64 h-64 object-cover rounded-lg"
              />
              {/* Exclusive 60% OFF Badge */}
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                <p className="text-xs font-bold uppercase">Exclusive</p>
                <p className="text-4xl font-black">60%</p>
                <p className="text-xl font-bold uppercase">OFF</p>
              </div>
              {/* FDA Registered Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg border-4 border-white">
                <p className="text-xs font-bold">FDA</p>
                <p className="text-lg font-black">REGI-</p>
                <p className="text-lg font-black -mt-2">STERED</p>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg mb-4 transition-all">
                Get 60% Off Today →
              </button>
              <p className="text-sm mb-2">
                <span className="font-bold">Sell-Out Risk: <span className="text-red-600">High</span></span> | <span className="text-green-600 font-bold">FREE Shipping</span>
              </p>
              <p className="text-sm text-gray-700 font-semibold">
                Try it today with a 90-Day Money Back Guarantee!
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
