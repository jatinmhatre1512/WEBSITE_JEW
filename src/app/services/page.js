import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { FaCog, FaTools, FaCut, FaWrench, FaDraftingCompass } from 'react-icons/fa';

export const metadata = {
  title: 'Engineering Services | CNC Machining, Metal Fabrication, Lathe Work - Boisar, Palghar',
  description: 'Complete engineering services including CNC machining, lathe work, sheet metal cutting & bending, metal fabrication & welding, and custom parts manufacturing in Boisar, Palghar, Maharashtra.',
};

const services = [
  {
    icon: FaCog,
    title: 'CNC Machining Services',
    slug: 'cnc-machining',
    description: 'High-precision CNC turning and milling operations for complex industrial components. We handle tight tolerances up to ±0.01mm with advanced multi-axis CNC machines.',
    features: ['Multi-axis CNC turning', 'CNC milling & drilling', 'Tight tolerances (±0.01mm)', 'Complex geometries'],
  },
  {
    icon: FaTools,
    title: 'Lathe Machining Services',
    slug: 'lathe-machining',
    description: 'Expert conventional and CNC lathe operations for shafts, bushings, pulleys, and all rotational components. Single piece to batch production.',
    features: ['Shaft machining', 'Bushings & bearings', 'Threading operations', 'Batch production'],
  },
  {
    icon: FaCut,
    title: 'Sheet Metal Cutting & Bending',
    slug: 'sheet-metal-cutting',
    description: 'Precision sheet metal cutting, bending, punching, and forming services. We work with all gauges and materials for industrial enclosures, brackets, and panels.',
    features: ['Laser/plasma cutting', 'CNC bending', 'Punching & forming', 'Custom enclosures'],
  },
  {
    icon: FaWrench,
    title: 'Metal Fabrication & Welding',
    slug: 'metal-fabrication',
    description: 'Complete metal fabrication services including MIG, TIG, and arc welding. From structural frameworks to custom assemblies and industrial equipment.',
    features: ['MIG/TIG welding', 'Structural fabrication', 'Custom assemblies', 'Surface finishing'],
  },
  {
    icon: FaDraftingCompass,
    title: 'Custom Parts Manufacturing',
    slug: 'custom-parts',
    description: 'End-to-end custom parts manufacturing from your drawings or samples. Prototype development to production runs with guaranteed quality.',
    features: ['Prototype development', 'Reverse engineering', 'Small batch production', 'Quality inspection'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-steel-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Engineering Services</h1>
          <p className="text-steel-300 max-w-2xl mx-auto text-lg">
            Comprehensive machining and fabrication solutions for automotive, construction, and industrial manufacturing sectors in Boisar, Palghar.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-steel-100 hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <service.icon className="text-primary-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-steel-800">{service.title}</h2>
                  </div>
                  <p className="text-steel-500 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="bg-steel-50 text-steel-600 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <Link href={`/services/${service.slug}`} className="btn-primary">
                    Learn More <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Send us your drawings or requirements and get a detailed quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-steel-50 transition-colors text-lg">
            Get a Free Quote <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
