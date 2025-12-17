import { Routes, Route } from 'react-router-dom';
import { NotFound404 } from '../../pages/not-found-404/not-found-404';

function App() {
  return (
    <Routes>
      {/* любые существующие роуты */}

      {/* временно для проверки */}
      <Route path="/404" element={<NotFound404 />} />

      {/* настоящий 404 */}
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
