export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
        <div className="flex items-center justify-center h-20 bg-red-500 text-white">
          <h2 className="text-2xl font-bold">404</h2>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Página não encontrada</h3>
          <p className="text-gray-700">
            Desculpe, a página que você está procurando não foi encontrada.
          </p>
        </div>
      </div>
    </div>
  );
}
