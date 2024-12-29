// OG Image Generation Component
// This component generates a 1200x630 preview image
export default function OgImage() {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-16">
      <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
        JSON Tools
      </h1>
      <h2 className="text-4xl font-semibold text-white mb-6">
        Professional JSON Toolkit
      </h2>
      <div className="text-2xl text-gray-300 text-center max-w-4xl">
        Format • Validate • Edit • Convert
      </div>
      <div className="absolute bottom-16 right-16 text-xl text-gray-400">
        jsontools.vercel.app
      </div>
    </div>
  );
} 