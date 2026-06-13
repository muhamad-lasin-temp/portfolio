import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Globe } from 'lucide-react';

export default function LiveWebsites() {
  const [isOpen, setIsOpen] = useState(false);

  const websites = [
    {
      name: "Afamia Soft",
      url: "https://afamiasoft.com",
      status: "Live"
    },
    {
      name: "BTC UAE",
      url: "https://btc-uae.net",
      status: "Live"
    },
    {
      name: "Finprime Consulting",
      url: "https://finprimeconsulting.com/",
      status: "Live"
    },
    {
      name: "Nanay's Luto Restaurant",
      url: "https://nanaysluto.vercel.app/",
      status: "Live"
    }
  ];

  return (
    <section className="w-full flex justify-center py-10 relative z-10 bg-white">
      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="px-10 py-3 rounded-full border border-violet-500 text-violet-500 bg-white hover:bg-violet-500 hover:text-white transition-colors duration-300 font-sans font-semibold tracking-wide uppercase shadow-sm cursor-pointer"
      >
        BROWSE LIVE WEBSITES
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <Globe className="text-violet-500" size={20} />
                  <h3 className="font-display font-semibold text-lg uppercase tracking-wider text-gray-900">
                    Live Websites
                  </h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                {websites.map((site, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-2xl border ${site.status === 'Live' ? 'border-gray-100 hover:border-violet-300 hover:bg-violet-50/50 transition-colors' : 'border-dashed border-gray-200 bg-gray-50/50'}`}
                  >
                    <div>
                      <h4 className={`font-semibold ${site.status === 'Live' ? 'text-gray-900' : 'text-gray-500'}`}>
                        {site.name}
                      </h4>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full mt-2 inline-block ${site.status === 'Live' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-600'}`}>
                        {site.status}
                      </span>
                    </div>
                    {site.status === 'Live' ? (
                      <a 
                        href={site.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <div className="w-10 h-10 rounded-full border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                        <ExternalLink size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
