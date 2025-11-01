export default function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl font-bold text-center mb-12">
      <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}
