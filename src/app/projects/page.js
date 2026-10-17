import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Our Projects & Gallery | CNC Machined Parts, Fabrication Work - Boisar, Palghar',
  description: 'View our completed projects including CNC machined components, fabricated structures, sheet metal work, and custom parts. Quality work from our Boisar, Palghar workshop.',
};

const projects = [
  {
    title: 'Precision Turned Components',
    category: 'CNC Machining',
    description: 'High-precision turned components for industrial applications with tight tolerance machining.',
    material: 'MS / SS',
    industry: 'Industrial',
    image: '/images/parts/IMG-20260620-WA0000.jpg',
  },
  {
    title: 'Milling Machine Job Work',
    category: 'CNC Machining',
    description: 'Complex milling operations on industrial components with precise surface finish.',
    material: 'Mild Steel',
    industry: 'Machinery',
    image: '/images/parts/IMG-20260620-WA0001.jpg',
  },
  {
    title: 'Drilling Loom Spares',
    category: 'Textile Parts',
    description: 'Specialist drilling and machining of loom spare parts for textile industry.',
    material: 'EN8 Steel',
    industry: 'Textile',
    image: '/images/parts/IMG-20260620-WA0002.jpg',
  },
  {
    title: 'Custom Fabricated Parts',
    category: 'Metal Fabrication',
    description: 'Custom metal fabrication work for industrial equipment and machinery.',
    material: 'MS Structural',
    industry: 'Industrial Equipment',
    image: '/images/parts/IMG-20260620-WA0003.jpg',
  },
  {
    title: 'Textile Machine Components',
    category: 'Textile Parts',
    description: 'All types of textile machine parts machined to exact specifications.',
    material: 'Various Metals',
    industry: 'Textile',
    image: '/images/parts/IMG-20260620-WA0004.jpg',
  },
  {
    title: 'Turned Shaft Components',
    category: 'Lathe Machining',
    description: 'Precision shaft turning and boring for industrial applications.',
    material: 'EN24 / EN8',
    industry: 'Automotive',
    image: '/images/parts/IMG-20260620-WA0005.jpg',
  },
  {
    title: 'Industrial Machine Parts',
    category: 'Custom Parts',
    description: 'Batch production of custom industrial machine parts with quality assurance.',
    material: 'MS / SS / Aluminium',
    industry: 'Manufacturing',
    image: '/images/parts/IMG-20260620-WA0006.jpg',
  },
  {
    title: 'Drilling & Boring Work',
    category: 'CNC Machining',
    description: 'Precision drilling and boring operations for heavy-duty components.',
    material: 'Cast Iron / MS',
    industry: 'Construction',
    image: '/images/parts/IMG-20260620-WA0007.jpg',
  },
  {
    title: 'Fabricated Assemblies',
    category: 'Metal Fabrication',
    description: 'Complete fabricated assemblies with welding and surface finishing.',
    material: 'MS / SS',
    industry: 'Industrial',
    image: '/images/parts/IMG-20260620-WA0008.jpg',
  },
  {
    title: 'CNC Machined Components',
    category: 'CNC Machining',
    description: 'High-accuracy CNC machined components for various industries.',
    material: 'Aluminium / Brass',
    industry: 'Electronics',
    image: '/images/parts/IMG-20260620-WA0009.jpg',
  },
  {
    title: 'Turning Machine Job Work',
    category: 'Lathe Machining',
    description: 'Expert turning machine job work for shafts, bushings and rotational parts.',
    material: 'MS / EN Series',
    industry: 'Machinery',
    image: '/images/parts/IMG-20260620-WA0010.jpg',
  },
  {
    title: 'Custom Metal Parts',
    category: 'Custom Parts',
    description: 'Made-to-order custom metal parts from drawings or samples.',
    material: 'Various',
    industry: 'Multiple',
    image: '/images/parts/IMG-20260620-WA0011.jpg',
  },
];

const categories = ['All', 'CNC Machining', 'Lathe Machining', 'Metal Fabrication', 'Textile Parts', 'Custom Parts'];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-steel-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects & Work Gallery</h1>
          <p className="text-steel-300 max-w-2xl mx-auto text-lg">
            Showcasing our precision engineering work across CNC machining, fabrication, and custom manufacturing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter (static display) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  i === 0 ? 'bg-primary-600 text-white' : 'bg-steel-100 text-steel-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-steel-100 hover:shadow-lg transition-shadow"
              >
                {/* Real Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - Jitesh Engineering Works`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary-50 text-primary-600 text-xs px-2 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className="bg-steel-50 text-steel-500 text-xs px-2 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-steel-800 mb-2">{project.title}</h3>
                  <p className="text-steel-500 text-sm mb-3">{project.description}</p>
                  <p className="text-xs text-steel-400">
                    <span className="font-medium">Material:</span> {project.material}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Gallery */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-steel-800 mb-6 text-center">More From Our Workshop</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                'IMG-20260620-WA0012.jpg',
                'IMG-20260620-WA0013.jpg',
                'IMG-20260620-WA0014.jpg',
                'IMG-20260620-WA0015.jpg',
                'IMG-20260620-WA0016.jpg',
                'IMG-20260620-WA0017.jpg',
                'IMG-20260620-WA0018.jpg',
                'IMG-20260620-WA0019.jpg',
                'IMG_20260620_140141862.jpg',
                'IMG_20260620_140227806.jpg',
                'IMG_20260620_140403486.jpg',
                'IMG_20260620_140404800.jpg',
                'IMG_20260620_140453560.jpg',
                'IMG_20260620_140514821.jpg',
                'IMG_20260620_140519187.jpg',
                'IMG_20260620_140536603.jpg',
                'IMG_20260620_140617516.jpg',
                'IMG_20260620_140643752.jpg',
                'IMG_20260620_140651123.jpg',
                'IMG_20260620_140704696.jpg',
                'IMG_20260620_140711415.jpg',
              ].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden aspect-square">
                  <img
                    src={`/images/parts/${img}`}
                    alt={`Machined part ${i + 1} - Jitesh Engineering Works`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Have a Similar Project?</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Send us your requirements or drawings and get a competitive quote. We handle projects of all sizes.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-steel-50 transition-colors text-lg">
            Request a Quote <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
