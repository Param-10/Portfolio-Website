import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo } from 'react';

function Background3D() {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push({ x, y, z });
    }
    return temp;
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {particles.map((particle, i) => (
          <mesh key={i} position={[particle.x, particle.y, particle.z]}>
            <Sphere args={[0.02, 16, 16]}>
              <meshStandardMaterial 
                color="#00ff00" 
                emissive="#00ff00"
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </Sphere>
          </mesh>
        ))}
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

export default Background3D; 