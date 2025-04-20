const MenuOverlay = ({ onClose }) => (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-40 overflow-y-auto">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-xl font-medium">Close ✕</button>
      </div>
      <div className="p-12">
        <h2 className="text-2xl font-serif mb-6">Sensorial Selections</h2>
        <ul className="space-y-4 text-lg">
          <li>Skincare</li>
          <li>Hair</li>
          <li>Fragrance</li>
          <li>Body & Hand</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
  
  export default MenuOverlay;
  