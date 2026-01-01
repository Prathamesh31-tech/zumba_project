export default function TrainerCard({ name, image, specialty }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-pink-500">{name}</h3>
        <p className="text-gray-600">{specialty}</p>
      </div>
    </div>
  );
}
