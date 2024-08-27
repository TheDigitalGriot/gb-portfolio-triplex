import {React , Suspense, useEffect, useState, useRef} from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls, useScroll } from "@react-three/drei";

import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import { getProject } from '@theatre/core';
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./components/utils/config";

import { Leva, useControls, folder } from "leva";
import { Perf } from "r3f-perf";

import { Experience } from "./components/Experience";

// our Theatre.js project sheet, we'll use this later
// const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

studio.initialize()
// studio.ui.hide();
studio.extend(extension)

function App() {
  const [section, setSection] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [studioOpened, setStudioOpened] = useState(false);
  const [interviewOpened, setInterviewOpened] = useState(false);
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  const [scrollPercent, setScrollPercent] = useState(0);

  // Leva Controls
  const [{ bgColor, selectSection, cameraSelect, camPosition, camFov, camAspectRatio, camNear, camFar, fogActive, fogNear, fogFar, fogColor, InterviewOpenActive, AxesHelperActive, GridHelperActive, CameraHelperActive, position }, set] = useControls(() => ("Main Controls", {
      bgColor: "#3772b8",
      selectSection: {
          value: "0",
          options: ["0", "1", "2", "3"],
      },
      cameraSelect: {
          value: "experienceCamera",
          options: ["experienceCamera", "studioCamera", "interviewCamera"],
      },
      cameraSettings: folder({ 
          camPosition: {
          x: 5,
          y: 3,
          z: 10,
          },
          camFov: 55,
          camAspectRatio: 16/9,
          camNear: 1,
          camFar: 25
      },
      { collapsed: true }),
      Helpers: folder({
          AxesHelperActive: false,
          GridHelperActive: false,
          CameraHelperActive: false,
      },
      { collapsed: true }),
      fog: folder({
          fogActive: false,
          fogNear: 5,
          fogFar: 25,
          fogColor: "#3772b8",
      },
      { collapsed: true }),
      Experiences: folder({
          InterviewOpenActive: false,
          GamepadActive: false,
      },
      { collapsed: true }),
      position: { x: -50, y: 50 },
  }));

  /*
  * SCROLL Reference
  */
  const scrollRef = useRef(); // Ref for ScrollControls
  
  // SCROLL CONTROLS TEST
  useEffect(() => {
    const handleScrollUpdate = (e) => {
      const newScrollPercent = e.detail.scrollPercent;
      console.log('Received scrollUpdate event:', newScrollPercent);
      if (scrollRef.current) {
        console.log('SCROLL REF CURRENT:', scrollRef.current);
      }
      setScrollPercent(newScrollPercent);
    };

    // Listen for the custom scrollUpdate event from wp-sync.js
    window.addEventListener('scrollUpdate', handleScrollUpdate);

    return () => {
      window.removeEventListener('scrollUpdate', handleScrollUpdate);
    };
  }, []);
  // END TEST

  //SECTION CHNAGES
  useEffect(() => {
      setMenuOpened(false);
  }, [section]);

  //CAMERA SETTINGS
  const experienceCamera = { position: [5, 3, 10], fov: 55, near: 1, far: 25 }
  // const experienceCamera = { position: [camPosition.x, camPosition.y, camPosition.z], fov: 55, near: 1, far: 25 }
  const studioCamera = { position: [-2, 3, 10], fov: 30, near: 5, far: 25 }
  const interviewCamera = { position: [0, 3, 10], fov: 10, near: 5, far: 25 }

  const [cameraView, setCameraView] = useState(experienceCamera);
  const CameraHelper = () => {
      const camera = new PerspectiveCamera(60, 1, 1, 3);
      return <cameraHelper args={[camera]} />;
  }

  //Skills Open and Interview Open
  useEffect(() => {
      setCameraView(prevCameraView => {
      if (interviewOpened) {
          return interviewCamera;
      } else if (studioOpened) {
          return studioCamera;
      } else {
          return experienceCamera;
      }
      });
  }, [studioOpened, interviewOpened]);

  // Select Section
  useEffect(() => {
      console.log("Section Selected "+selectSection);
      setSection(selectSection);
  }, [selectSection]);
  
  return (
    <>
      <MotionConfig
          transition={{
          ...framerMotionConfig,
          }}
      >
        <Canvas 
          shadows
          camera={cameraView}
        >
          {/* <color attach="background" args={[bgColor]} /> */}
          {fogActive && <fog attach="fog" color={fogColor} near={fogNear} far={fogFar} />}
          <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
          {/* <OrbitControls 
            enablePan={true}  // Disable panning
            enableZoom={false}  // Allow zooming with pinch gestures, but scroll zoom will be disabled
            enableRotate={true}  // Allow rotation via click and drag
          /> */}
          <ScrollControls pages={4} damping={0.1} prepend={true} ref={scrollRef}>
            <Scroll>
                <Suspense>
                  <GBHeader 
                    section={section} 
                    setSection={setSection} 
                    menuOpened={menuOpened} 
                    studioOpened={studioOpened} 
                    interviewOpened={interviewOpened} 
                    currentSection={currentSection} 
                    setCurrentSection={setCurrentSection} 
                    cameraView={cameraView}
                    setCharacterAnimation={setCharacterAnimation} 
                    characterAnimation={characterAnimation} 
                    scrollPercent={scrollPercent}
                    scrollRef={scrollRef}
                  />
                </Suspense>
            </Scroll>
            <Scroll html>
              
            </Scroll>
          </ScrollControls>
          <Perf position="bottom-right" />
        </Canvas>
      </MotionConfig>
      <Leva collapsed={true} />
    </>
    

    
  );
}

function GBHeader({section, setSection, menuOpened, studioOpened, interviewOpened, currentSection, setCurrentSection, cameraView, setCharacterAnimation, characterAnimation, scrollPercent, scrollRef
}) {
  const scrollData = useScroll();

  useEffect(() => {
    if (scrollData) {
      scrollData.el.scrollTop = scrollPercent * scrollData.el.scrollHeight;
    }
  }, [scrollData, scrollPercent]);
  
  scrollData.el.onscroll = () => {
    console.log("canvas element scrolled")
  }

  return (
      <Experience 
          section={section} 
          setSection={setSection} 
          menuOpened={menuOpened} 
          studioOpened={studioOpened} 
          interviewOpened={interviewOpened} 
          currentSection={currentSection} 
          setCurrentSection={setCurrentSection} 
          cameraView={cameraView}
          setCharacterAnimation={setCharacterAnimation} 
          characterAnimation={characterAnimation} 
          scrollPercent={scrollPercent}
      />
  );
}

export default App;
