import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState, useMemo } from "react";
import { framerMotionConfig } from "./utils/config";
import { HomeScene } from "./Scene_1_Home";
import { SkillsScene } from "./Scene_2_Skills";
import { Avatar } from "./Avatar";

import { useControls, folder, button, Leva } from "leva";

const boxMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const sphereMaterial = new THREE.MeshStandardMaterial({ color: "white" });

export const Experience = (props) => {
  const { menuOpened, studioOpened, interviewOpened, currentSection, setCurrentSection } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    props.setCharacterAnimation("FallingIdle");
    setTimeout(() => {
      props.setCharacterAnimation(section === 0 ? "Typing" : "Idle");
    }, 600);
  }, [section]);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  // Avatar Position/Rotation Code
  const optionsAvatarPos = useMemo(() => {
    return {
      x: { value: 0.45, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      y: { value: -0.9, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      z: { value: 3.12, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    }
  }, [])
  const optionsAvatarRtn = useMemo(() => {
    return {
      x: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      y: { value: -2.4, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    }
  }, [])
  const optionsHomePos = useMemo(() => {
    return {
      x: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    }
  }, [])
  const optionsHomeRtn = useMemo(() => {
    return {
      x: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    }
  }, [])
  const optionsSkillsPos = useMemo(() => {
    return {
      x: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    }
  }, [])
  const optionsSkillsRtn = useMemo(() => {
    return {
      x: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    }
  }, [])
  const optionsProjectsPos = useMemo(() => {
    return {
      x: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: Math.PI * -2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    }
  }, [])

  const avatarPosition = useControls('Avatar Position', optionsAvatarPos);
  const avatarRotation = useControls('Avatar Rotation', optionsAvatarRtn);
  
  const HomePosition = useControls('Home Position', optionsHomePos);
  const HomeRotation = useControls('Home Rotation', optionsHomeRtn);

  const SkillsPosition = useControls('Skills Position', optionsSkillsPos);
  const SkillsRotation = useControls('Skills Rotation', optionsSkillsRtn);

  //LEVA Controls
  const { itemDisplayed,homeDissolve } = useControls("Dissolve Effect", { 
    itemDisplayed: {
      value: "home",
      options: ["home", "avatar"],
    },
    homeDissolve: true,
  });
  const [visibleItem, setVisibleItem] = useState(itemDisplayed);
  const onFadeOut = () => setVisibleItem(itemDisplayed);

  // Main Menu Open
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  //Interview Open
  useEffect(() => {
    interviewOpened && setCharacterAnimation("BreathingIdle");

    animate(cameraPositionX, interviewOpened ? 2 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, interviewOpened ? -2 : 0, {
      ...framerMotionConfig,
    });

  }, [interviewOpened]);



  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("FallingIdle");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Idle");
    }, 600);
  }, [section]);

  const characterGroup = useRef();

  const defaultPosition = [
    isMobile ? 0 : 2 * officeScaleRatio,
    isMobile ? -viewport.height / 6 : 2,
    3,
  ]

  const studioPosition = [
    -6, //closer to left side of screen
    isMobile ? -viewport.height / 6 : 2,
    5, //closer to camera
  ]
  const projectsPosition = [
    -6, //closer to left side of screen
    isMobile ? -viewport.height / 5 : 2,
    5, //closer to camera
  ]

  // variants for each section
  const variants = {
    0: {
      scaleX: officeScaleRatio,
      scaleY: officeScaleRatio,
      scaleZ: officeScaleRatio,
    },
    1: {
      y: -viewport.height + 0.5,
      x: isMobile ? 0.3 : 0,
      z: 7,
      rotateX: 0,
      rotateY: isMobile ? -Math.PI / 2 : 0,
      rotateZ: 0,
      scaleX: isMobile ? 1.5 : 1,
      scaleY: isMobile ? 1.5 : 1,
      scaleZ: isMobile ? 1.5 : 1,
    },
    2: {
      x: isMobile ? -1.4 : -2,
      y: -viewport.height * 2 + 0.5,
      z: 0,
      rotateX: 0,
      rotateY: Math.PI / 2,
      rotateZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    },
    3: {
      y: -viewport.height * 3 + 1,
      x: 0.24,
      z: 8.5,
      rotateX: 0,
      rotateY: -Math.PI / 4,
      rotateZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    },
    4: {
      y: -viewport.height + 0.5,
      x: isMobile ? 0.3 : 0,
      z: 7,
      rotateX: 0,
      rotateY: 45,
      rotateZ: 0,
      scaleX: isMobile ? 1.5 : 1,
      scaleY: isMobile ? 1.5 : 1,
      scaleZ: isMobile ? 1.5 : 1,
    },
  }

  return (
    <>
      <ambientLight intensity={1} />
      
      {/* AVATAR */}
      <motion.group
        
        position={[avatarPosition.x, avatarPosition.y, avatarPosition.z]}
        rotation={[avatarRotation.x, avatarRotation.y, avatarRotation.z]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
            rotateX: 0,
            
            rotateZ: 0,
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 6,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 6.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={props.characterAnimation} />
      </motion.group>

      {/* HOME PAGE SCENE */}
      <motion.group
        position={!studioOpened ? defaultPosition : studioPosition}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation={[HomeRotation.x, HomeRotation.y, HomeRotation.z]}
        animate={{
          y: isMobile ? -viewport.height / 6 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <HomeScene
            position-y={-1}
            dissolveVisible={true}
            onFadeOut={onFadeOut}
          />
      </motion.group>
      
      {/* SKILLS */}
      <motion.group
        position={[-4.2, SkillsPosition.y, SkillsPosition.z]}
        rotation={[0.1, -1.1, 0]}
        animate={{
          z: section === 1 ? 0 : -20,
          y:
            section === 1
              ? -viewport.height
              : isMobile
              ? -viewport.height
              : -1.5 * officeScaleRatio,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <SkillsScene
          position-y={-1}
          dissolveVisible={true}
          onFadeOut={onFadeOut}
        />
      </motion.group>
    </>
  );
};
