/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Scene_1_Home_TEST_v2.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import VideoMaterial from "./VideoMaterial";

import * as THREE from 'three'
// import { DissolveMaterial } from './DissolveMaterial'

export function HomeScene(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('models/Scene_1_Home_TEST_v2.glb')

  // Assign texture
  const texture = useTexture('textures/HomeScene_COMBINED.png')
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  // Set texture
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  })
  const texturGlassMaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0,
    metalness: 0,
    transmission: 1,
  })
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Roof.geometry} material={materials['Matte Metallic Paint.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.LogoText.geometry} material={materials['White Marble Texture.003']} >
        <meshStandardMaterial color={0xFFFFFF} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.LogoIcons.geometry} material={materials['GB Plastic Blue']} >
        <meshStandardMaterial color={0x1b3579} metalness={0} roughness={0.7} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.FrontKioskDesk.geometry} material={materials['Matte Metallic Paint.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.DeskBase.geometry} material={materials['Matte Metallic Paint.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel2.geometry} material={materials['Matte Metallic Paint.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel2Accent.geometry} material={materials['GB Matte Blue Wall']} >
        <meshStandardMaterial color={0x1b3579} metalness={0} roughness={1} />
      </mesh>
      <mesh geometry={nodes.BackWallAccent.geometry} material={materials['GB Matte Blue Wall']} >
        <meshStandardMaterial color={0x1b3579} metalness={0} roughness={1} />
      </mesh>
      <mesh geometry={nodes.SideWallAccent.geometry} material={materials['GB Matte Blue Wall']} >
        <meshStandardMaterial color={0x1b3579} metalness={0} roughness={1} />
      </mesh>
      <mesh geometry={nodes.Panel2Frame.geometry} material={materials['GB Plastic Blue']} >
        <meshStandardMaterial color={0x0d1787} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh geometry={nodes.Panel2Screen_Inside.geometry} material={materials['Screen.003']} >
        <meshStandardMaterial color={0xff00ff} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel2Screen_Outside.geometry} material={materials['Screen.003']} >
        <meshStandardMaterial color={0xff00ff} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.BackWallFrame.geometry} material={materials['GB Plastic Blue']} >
        <meshStandardMaterial color={0x0d1787} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh geometry={nodes.BackWallScreenLeft.geometry} material={materials['Screen.003']} >
        <meshStandardMaterial color={0xff00ff} metalness={0} roughness={0.9} />
      </mesh>
      <mesh geometry={nodes.BackWallScreenRight.geometry} material={materials['Screen.003']} >
        <VideoMaterial src={"videos/gb-cv.mp4"} />
      </mesh>
      <mesh geometry={nodes.BackWallPot.geometry} material={materials['Material__9672.003']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.BackWallPlant.geometry} material={materials['leaf.004']} >
        <meshStandardMaterial color={0x4F7942} metalness={0} roughness={0.9} />
      </mesh>
      <mesh geometry={nodes.BackWall.geometry} material={materials['Matte Metallic Paint.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.BackWallCorner.geometry} material={materials['Matte Metallic Paint.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.SideWallFrame.geometry} material={materials['GB Plastic Blue']} >
        <meshStandardMaterial color={0x0d1787} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh geometry={nodes.SideWallScreen.geometry} material={materials['Screen.003']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Frame.geometry} material={materials['GB Plastic Blue']} >
        <meshStandardMaterial color={0x0d1787} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh geometry={nodes.Panel1FrameBack.geometry} material={materials['Material__9672.003']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Screen.geometry} material={materials['Screen.003']} >
        <VideoMaterial src={"videos/gb-code.mp4"} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.LoungeTable.geometry} material={texturGlassMaterial} />
      <mesh castShadow receiveShadow geometry={nodes.LoungeSeats.geometry} material={materials['Material__9672.003']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.LoungeLegs.geometry} material={materials['Material__9647.003']} >
        <meshStandardMaterial color={0xa8a9ad} metalness={0.8} roughness={0} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.DeskNeonLight.geometry} material={materials.Neon} >
        <meshStandardMaterial metalness={0.5} roughness={0.2} emissive={0x0900FF} color={0x0d1787} />
      </mesh>
      <mesh geometry={nodes.PotLightFixtures.geometry} material={materials['metal1.004']} >
        <meshStandardMaterial color={0xFFFFFF} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.PotLightBulbs.geometry} material={materials['09___Defseg.003']} >
        <meshStandardMaterial color={0xEEEEEE} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.DoorHandle.geometry} material={materials['Material__9647.003']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Glass.geometry} material={texturGlassMaterial} />
      <mesh geometry={nodes.Panel1Plants.geometry} material={materials['leaf.004']} >
      <meshStandardMaterial color={0x4F7942} metalness={0} roughness={0.9} />
      </mesh>
      <mesh geometry={nodes.HangingLightFixtures.geometry} material={materials['Material__9676.003']} >
        <meshStandardMaterial color={0xEEEEEE} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.HangingLightBulbs.geometry} material={materials['09__gfh.003']} >
        <meshStandardMaterial color={0xFFFBC8} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChairArmRests.geometry} material={materials['Plastic.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChairAluminum.geometry} material={materials['Aluminium.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChairStraps.geometry} material={materials['Plastic Blue Old']} >
        <meshStandardMaterial color={0x0d1787} metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh receiveShadow geometry={nodes.Floor_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh receiveShadow geometry={nodes.Floor_combine.geometry} >
        <shadowMaterial attach="material" opacity={0.5} />
      </mesh>
      <mesh geometry={nodes.Panel1_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Box_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Planter1_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Planter2_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.RoofWoodSlats_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.DeskTop_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.FloorSides_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.FrontKioskWoodPanel_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChair_BackRest_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChair_HeadRest1_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChair_HipRest1_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChair_LegRest_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChair_Seat_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Sand1_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh geometry={nodes.Panel1Sand2_combine.geometry} >
        <meshStandardMaterial map={texture} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChairLegs_1.geometry} material={materials['Plastic.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.GamingChairLegs_2.geometry} material={materials['Aluminium.001']} >
        <meshStandardMaterial color={0x222222} metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}

useGLTF.preload('models/Scene_1_Home_TEST_v2.glb')
