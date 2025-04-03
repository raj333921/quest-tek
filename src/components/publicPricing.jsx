import { CheckIcon } from '@heroicons/react/20/solid'
import Header from './header'
import Footer from './footer'

const tiers = [
  {
    name: 'Free',
    id: 'tier-hobby',
    href: 'mailto:admin@sachadigi.com?subject=Reaching for you FREE&body=Hi,I would like to provide my details of my company and details',
    priceMonthly: '0 EUR',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['5 Jobs', 'limited can apply', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: 'mailto:admin@sachadigi.com?subject=Reaching for you Enterprise&body=Hi,I would like to provide my details of my company and details',
    priceMonthly: '50 EUR',
    description: 'Dedicated support for quick resolution',
    features: [
      'Unlimited Jobs Posting',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative'
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PublicPricing() {
  return (
    <>
    <Header />
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-yellow-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-yellow-400' : 'text-yellow-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-yellow-400' : 'text-yellow-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-yellow-500 text-white shadow-xs hover:bg-yellow-400 focus-visible:outline-yellow-500'
                  : 'text-yellow-600 ring-1 ring-yellow-200 ring-inset hover:ring-yellow-300 focus-visible:outline-yellow-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}
