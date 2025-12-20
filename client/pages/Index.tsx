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
              src="https://cdn.builder.io/api/v1/image/assets%2F2a9401f877da48d6b4f725528745b384%2F16f2727152594a409b4b6333216ba502?format=webp&width=800"
              alt="Dr. Sarah Chen"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                By Dr. Sarah Chen
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

        {/* Point 2: Statins Steal Your Energy at the Cellular Level */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            2. Statins Steal Your Energy at the Cellular Level
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Here's the part that shocked me when I first learned it: statins don't just block cholesterol production. They also block CoQ10 production. Same pathway. Same enzyme. And CoQ10 is what your mitochondria use to create energy in every single cell of your body—especially your heart and muscles.
              </p>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                That's why statin users complain about exhaustion, muscle weakness, and brain fog. It's not in their heads. Their cells literally can't produce energy efficiently anymore. Some cardiologists will prescribe CoQ10 separately to help with this, but most don't even mention it.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Lunessa was designed with this in mind. Every serving delivers 200mg of CoQ10—the exact amount shown in clinical studies to support cellular energy production and protect against oxidative stress. It's third-party tested and formulated to work synergistically with the red yeast rice, not against your body's natural processes.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Mitochondria and cellular energy concept"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 3: You Don't Have to Swallow Horse-Sized Pills Twice a Day */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            3. You Don't Have to Swallow Horse-Sized Pills Twice a Day
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Let's be honest about something nobody talks about: medication compliance. Studies show that nearly 50% of people prescribed statins stop taking them within the first year. And it's not just because of side effects—it's because swallowing giant pills every single day feels awful.
              </p>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                I've had patients tell me they gag every morning. That they dread it. That they "forget" to take them because subconsciously they just can't deal with choking down another pill.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Lunessa comes in gummy form. That's it. No choking. No gagging. No needing water or food. Just a raspberry-flavored gummy that you can actually take consistently, which is the only way any cholesterol support works long-term. It sounds simple, but this one change makes all the difference in whether people actually stick with it.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/placeholder.svg"
                alt="Easy-to-take gummy supplements"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 4: It's Backed by Real Science */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            4. It's Backed by Real Science
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <div>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Red yeast rice isn't some trendy supplement that appeared on Instagram last year. It's been used in traditional Chinese medicine for over 1,000 years and studied extensively in modern clinical trials. Multiple studies have shown that red yeast rice at clinical doses can support healthy cholesterol levels comparable to low-dose statins—but with a significantly better side effect profile.
              </p>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                The key phrase there is "clinical doses." Most supplements use 600mg or maybe 1200mg and hope you don't notice. Lunessa delivers 2400mg of red yeast rice per serving—the amount actually used in the research studies that showed results.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                And because red yeast rice can sometimes contain citrinin (a harmful toxin) when manufactured improperly, Lunessa is certified citrinin-free and third-party tested. You're getting proper dosing based on the clinical studies, not guesswork.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Clinical research and testing"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 5: It Fits Into Your Life Without Taking Over Your Life */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                5. It Fits Into Your Life Without Taking Over Your Life
              </h2>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Statins come with a list of requirements: take at night, avoid grapefruit, watch for muscle pain, get liver function tests, monitor for interactions with your other medications. It becomes this whole medical management situation that dominates your daily routine.
              </p>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Lunessa is the opposite. Take two gummies per day. That's it. No special timing. No food restrictions. No monthly blood work just to make sure it's not destroying your liver. You can take it in the morning with breakfast, at night before bed, or whenever works for your schedule.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                People tell me this sounds too simple to be effective, but that simplicity is exactly why it works. When something is easy, you actually do it. And consistency is what creates results.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/placeholder.svg"
                alt="Simple daily routine with gummies"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Point 6: It Costs a Fraction of What You'll Spend on Statins */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            6. It Costs a Fraction of What You'll Spend on Statins
          </h2>
          <p className="leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
            Even with insurance, statins add up. Co-pays every month. Doctor visits every few months to monitor your levels and check for side effects. Liver function tests. And if you develop side effects, there are more medications to manage those, each with their own costs.
          </p>
          <p className="leading-relaxed mb-6" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
            One month's supply of Lunessa costs less than most people's monthly statin co-pay, and you can use it without the ongoing medical appointments and monitoring. You're getting clinical-level dosing of ingredients backed by actual research, in a form you'll actually take, at a price that doesn't require insurance negotiations or prior authorizations.
          </p>

          {/* Comparison Graphic */}
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg">
            <div className="text-center">
              <div className="relative mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Expensive statin prescription bottles"
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
                  alt="Lunessa gummies"
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

        {/* Point 7: You Can Try It Completely Risk-Free */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                7. You Can Try It Completely Risk-Free
              </h2>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Here's the fundamental difference: once you start statins, your doctor will likely tell you that you need to stay on them forever. There's no trial period. There's just "take this for the rest of your life" and hope the benefits outweigh the side effects.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                Lunessa comes with a 90-day money-back guarantee. Try it for three full months. Track your energy levels. Notice whether you're sleeping better, thinking more clearly, or feeling stronger. Get your cholesterol tested and see the actual numbers. If you don't see a meaningful difference in how you feel and what your labs show, return it for a full refund.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif', color: '#333333' }}>
                There's no pressure, no long-term commitment, and no risk. Just a real opportunity to support your cholesterol naturally without sacrificing your quality of life.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <img
                src="/placeholder.svg"
                alt="Lunessa gummies bottle"
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
            Why 47,000+ People Trust Lunessa™
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Margaret T."
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
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
                <img
                  src="/placeholder.svg"
                  alt="David K."
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
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
                <img
                  src="/placeholder.svg"
                  alt="Patricia H."
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
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
              Limited Time Offer
            </h2>
            <p className="text-gray-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              This exclusive offer is in high demand and inventory keeps selling out.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            {/* Product Image with Badges */}
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Lunessa Gummies"
                className="w-64 h-64 object-cover rounded-lg"
              />
              {/* Exclusive 60% OFF Badge */}
              <div className="absolute -top-6 -left-6 bg-red-600 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                <p className="text-xs font-bold uppercase">Exclusive</p>
                <p className="text-4xl font-black">60%</p>
                <p className="text-xl font-bold uppercase">OFF</p>
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
