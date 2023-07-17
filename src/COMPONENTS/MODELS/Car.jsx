import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Car(props) {
  const { nodes, materials } = useGLTF("./MODELS/car.gltf");
  // const { car } = useRef();

  // useFrame(() => {
  //   car.current.rotation.y += 1;
  // });

  return (
    <group {...props} dispose={null}>
      <group position={[0, -18.36, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
            <mesh
              geometry={nodes.Llanta_CarPaintBlack_0.geometry}
              material={materials.CarPaintBlack}
            />
            <mesh
              geometry={nodes.TaponLlanta_CarPaintBlack_0.geometry}
              material={materials.CarPaintBlack}
            />
            <mesh
              geometry={nodes.TornillosLlanta_CarPaintBlack_0.geometry}
              material={materials.CarPaintBlack}
              rotation={[-Math.PI, -Math.PI / 5, Math.PI]}
            />
            <mesh
              geometry={nodes.Pneumatico_Pneumatic_0.geometry}
              material={materials.Pneumatic}
              position={[0.82, -7.19, 3.15]}
              scale={10}
            />
            {/* <mesh
              geometry={nodes.HondaLogosRuedasDelanteras_FullChrome_0.geometry}
              material={materials.FullChrome}
              position={[0.82, -8.35, 3.15]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={10}
            /> */}
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Chasis_PuertasDelanteras_CarPaintWhite_0.geometry}
              material={materials.CarPaintWhite}
            />
            <mesh
              geometry={nodes.Chasis_PuertasDelanteras_CarPaintBlack_0.geometry}
              material={materials.CarPaintBlack}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Chasis_PuertasTraseras_CarPaintWhite_0.geometry}
              material={materials.CarPaintWhite}
            />
            <mesh
              geometry={nodes.Chasis_PuertasTraseras_CarPaintBlack_0.geometry}
              material={materials.CarPaintBlack}
            />
          </group>
          {/* <group
            position={[321.03, 89.48, 0]}
            rotation={[-Math.PI / 2, -0.03, 0]}
            scale={10}
          >
            <mesh
              geometry={nodes.Camera001_CameraPlasticMaterial1_0.geometry}
              material={materials.CameraPlasticMaterial1}
            />
            <mesh
              geometry={nodes.Camera001_CameraPlasticMaterial2_0.geometry}
              material={materials.CameraPlasticMaterial2}
            />
            <mesh
              geometry={nodes.Camera001_CamerasCristal_0.geometry}
              material={materials.CamerasCristal}
            />
            <mesh
              geometry={nodes.Camera001_CameraLens_BlackShiny_0.geometry}
              material={materials.CameraLens_BlackShiny}
            />
          </group> */}
          {/* <group
            position={[-55.34, 79.71, 0]}
            rotation={[Math.PI / 2, -0.04, Math.PI]}
            scale={10}
          >
            <mesh
              geometry={nodes.Camera002_CameraPlasticMaterial1_0.geometry}
              material={materials.CameraPlasticMaterial1}
            />
            <mesh
              geometry={nodes.Camera002_CameraPlasticMaterial2_0.geometry}
              material={materials.CameraPlasticMaterial2}
            />
            <mesh
              geometry={nodes.Camera002_CamerasCristal_0.geometry}
              material={materials.CamerasCristal}
            />
            <mesh
              geometry={nodes.Camera002_CameraLens_BlackShiny_0.geometry}
              material={materials.CameraLens_BlackShiny}
            />
          </group> */}
          {/* <group
            position={[77.72, 93.54, 83.72]}
            rotation={[1.6, -0.07, 0.38]}
            scale={17.8}
          >
            <mesh
              geometry={nodes.Camera003_CameraPlasticMaterial1_0.geometry}
              material={materials.CameraPlasticMaterial1}
            />
            <mesh
              geometry={nodes.Camera003_CameraPlasticMaterial2_0.geometry}
              material={materials.CameraPlasticMaterial2}
            />
            <mesh
              geometry={nodes.Camera003_CamerasCristal_0.geometry}
              material={materials.CamerasCristal}
            />
            <mesh
              geometry={nodes.Camera003_CameraLens_BlackShiny_0.geometry}
              material={materials.CameraLens_BlackShiny}
            />
          </group> */}
          <group
            position={[66.79, 90.72, 82.47]}
            rotation={[2.5, 0, Math.PI / 2]}
            scale={7.62}
          >
            <mesh
              geometry={nodes.Camera004_CameraPlasticMaterial1_0.geometry}
              material={materials.CameraPlasticMaterial1}
            />
            <mesh
              geometry={nodes.Camera004_CameraPlasticMaterial2_0.geometry}
              material={materials.CameraPlasticMaterial2}
            />
            <mesh
              geometry={nodes.Camera004_CamerasCristal_0.geometry}
              material={materials.CamerasCristal}
            />
            <mesh
              geometry={nodes.Camera004_CameraLens_BlackShiny_0.geometry}
              material={materials.CameraLens_BlackShiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.CristalLateral_Cristal_0.geometry}
              material={materials.Cristal}
            />
            <mesh
              geometry={nodes.CristalLateral_CristalTintado_0.geometry}
              material={materials.CristalTintado}
            />
          </group>
          {/* <group
            position={[-55.78, 74.07, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={8}
          >
            <mesh
              geometry={nodes.HondaLogoFrontal_FullChrome_0.geometry}
              material={materials.FullChrome}
            />
            <mesh
              geometry={nodes.HondaLogoFrontal_BlueDetailLogos_0.geometry}
              material={materials.BlueDetailLogos}
            />
          </group> */}
          {/* <group
            position={[321.5, 83.22, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={8}
          >
            <mesh
              geometry={nodes.HondaLogoTrasero_FullChrome_0.geometry}
              material={materials.FullChrome}
            />
            <mesh
              geometry={nodes.HondaLogoTrasero_BlueDetailLogos_0.geometry}
              material={materials.BlueDetailLogos}
            />
          </group> */}
          <group
            position={[152.86, 51.69, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.AsientoParteSuperior_WhiteClothCouches_0.geometry}
              material={materials.WhiteClothCouches}
            />
            <mesh
              geometry={nodes.AsientoParteSuperior_GrayClothCouches_0.geometry}
              material={materials.GrayClothCouches}
            />
          </group>
          <group
            position={[165.23, 124.63, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.ReposacabezasAsientosDelanteros_WhiteClothCouches_0
                  .geometry
              }
              material={materials.WhiteClothCouches}
            />
            <mesh
              geometry={
                nodes.ReposacabezasAsientosDelanteros_GrayClothCouches_0
                  .geometry
              }
              material={materials.GrayClothCouches}
            />
          </group>
          {/* <group
            position={[232.24, 76.51, 56.54]}
            rotation={[-2.07, -0.51, 2.69]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.EngancheCInturonAsientosTraseros_Plastic45_0.geometry
              }
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.EngancheCInturonAsientosTraseros2_Chrome15_0.geometry
              }
              material={materials.Chrome15}
              position={[0.04, 0, 0]}
            />
          </group> */}
          {/* <group
            position={[138.19, 58.25, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.SeparadoresConsolaCentral_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.SeparadoresConsolaCentral_BlackPlasticShiny_0.geometry
              }
              material={materials.BlackPlasticShiny}
            />
          </group> */}
          {/* <group
            position={[150.15, 58.25, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.SeparadoresConsolaCentral1_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.SeparadoresConsolaCentral1_BlackPlasticShiny_0.geometry
              }
              material={materials.BlackPlasticShiny}
            />
          </group> */}
          {/* <group
            position={[104.76, 139.49, 28.71]}
            rotation={[-1.53, -0.37, 1.63]}
            scale={100}
          >
            <group rotation={[0.07, 0, 0]}>
              <mesh
                geometry={nodes.ParasolTecho_RoofCloth_0.geometry}
                material={materials.RoofCloth}
              />
              <mesh
                geometry={nodes.TiritaParasolTecho_RoofCloth_0.geometry}
                material={materials.RoofCloth}
                rotation={[0, 0, Math.PI]}
              />
            </group>
            <mesh
              geometry={nodes.AnclajeParasolTecho_WhitePlastic_0.geometry}
              material={materials.WhitePlastic}
            />
            <mesh
              geometry={nodes.ParasolTubo_WhitePlastic_0.geometry}
              material={materials.WhitePlastic}
              rotation={[0, 0, Math.PI]}
            />
            <mesh
              geometry={nodes.Anclaje2Parasol_WhitePlastic_0.geometry}
              material={materials.WhitePlastic}
              rotation={[0, 0, Math.PI]}
            />
          </group> */}
          {/* <group
            position={[95.15, 134.44, 0]}
            rotation={[-1.54, 0.14, -0.16]}
            scale={100}
          >
            <mesh
              geometry={nodes.RetrovisorCentral_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={nodes.RetrovisorCentral_Plastic25_0.geometry}
              material={materials.Plastic25}
            />
            <mesh
              geometry={nodes.BotonesRetrovisorCentral_Plastic25_0.geometry}
              material={materials.Plastic25}
            />
            <mesh
              geometry={nodes.CageLedsRetrovisorCentral_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes["LedsRetrovisorCentral_Buttons-Detail(text)_0"].geometry
              }
              material={materials["Buttons-Detailtext"]}
            />
            <mesh
              geometry={nodes.PalancaRetrovisorCentral_Plastic25_0.geometry}
              material={materials.Plastic25}
            />
            <mesh
              geometry={nodes.CristalRetrovisorCentral_RetroScreens_0.geometry}
              material={materials.RetroScreens}
            />
            <mesh
              geometry={
                nodes["BotonesRetrovisorCentral001_Buttons-Detail(text)_0"]
                  .geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[0.04, -0.04, -0.03]}
            />
            <mesh
              geometry={
                nodes["BotonesRetrovisorCentral002_Buttons-Detail(text)_0"]
                  .geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[0.04, 0.02, -0.03]}
            />
            <mesh
              geometry={
                nodes["BotonesRetrovisorCentral003_Buttons-Detail(text)_0"]
                  .geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[0.04, 0.04, -0.03]}
            />
            <mesh
              geometry={
                nodes["BotonesRetrovisorCentral004_Buttons-Detail(text)_0"]
                  .geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[0.04, -0.02, -0.03]}
            />
          </group> */}
          {/* <group
            position={[180.43, 147.71, 14.15]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.LucesTecho1_WhitePlastic_0.geometry}
              material={materials.WhitePlastic}
            />
            <mesh
              geometry={nodes.LucesTecho1_Cristal_0.geometry}
              material={materials.Cristal}
            />
            <mesh
              geometry={nodes.LucesTecho1_RoofLights_0.geometry}
              material={materials.RoofLights}
            />
          </group> */}
          {/* <group
            position={[186.45, 147.63, 35.35]}
            rotation={[-Math.PI / 2, 0.02, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.LucesTecho2_WhitePlastic_0.geometry}
              material={materials.WhitePlastic}
            />
            <mesh
              geometry={nodes.LucesTecho2_Cristal_0.geometry}
              material={materials.Cristal}
            />
            <mesh
              geometry={nodes.LucesTecho2_RoofLights_0.geometry}
              material={materials.RoofLights}
            />
          </group>
          <group
            position={[91.81, 85.97, -3.5]}
            rotation={[-Math.PI / 2, -Math.PI / 9, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes["Radio_Buttons-Detail(text)_0"].geometry}
              material={materials["Buttons-Detailtext"]}
            />
            <mesh
              geometry={nodes["RueditasRadio_Buttons-Detail(text)_0"].geometry}
              material={materials["Buttons-Detailtext"]}
            />
          </group>
          <group
            position={[54.42, 108.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.RejillaUpperDash_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={nodes.RejillaUpperDash_SpeakerRack_0.geometry}
              material={materials.SpeakerRack}
            />
          </group>
          <group
            position={[213.2, 76.2, 65.95]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.ReposabrazosClothPuertaTrasera_WhiteClothCouches_0
                  .geometry
              }
              material={materials.WhiteClothCouches}
            />
            <mesh
              geometry={
                nodes.ReposabrazosPlasticPuertaTraseraBottonBase_Plastic45_0
                  .geometry
              }
              material={materials.Plastic45}
              position={[-0.07, -0.01, 0.06]}
            />
            <mesh
              geometry={
                nodes["BottonPuertasTraserasInterior_Buttons-Detail(text)_0"]
                  .geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[-0.16, -0.01, 0.06]}
            />
          </group>
          <group
            position={[60.54, 105.53, 41.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.PlasticoBajoPuertasTraseras_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.PlasticoBajoPuertasTraseras_BlackNoSplecular_0.geometry
              }
              material={materials.BlackNoSplecular}
            />
          </group>
          <group
            position={[182.81, 48.97, 66.02]}
            rotation={[-Math.PI / 2, 0, 0.03]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.TapasAltavocesPuertasTraseras_SpeakerRack_0.geometry
              }
              material={materials.SpeakerRack}
            />
            <mesh
              geometry={
                nodes.TapasAltavocesPuertasTraseras_Plastic45_0.geometry
              }
              material={materials.Plastic45}
            />
          </group> */}
          {/* <group
            position={[184.29, 92.55, 68.1]}
            rotation={[3.08, 0.06, -3.14]}
            scale={100}
          >
            <mesh
              geometry={nodes.CageManetaPuertaTrasera_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={nodes.ManetaPuertaTrasera_BlackPlasticShiny_0.geometry}
              material={materials.BlackPlasticShiny}
            />
            <mesh
              geometry={nodes.BotonPuertaTrasera_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
          </group>
          <group
            position={[60.54, 105.53, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.PlasticoBajoPuertasDelanteras_Plastic45_0.geometry
              }
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.PlasticoBajoPuertasDelanteras_BlackNoSplecular_0.geometry
              }
              material={materials.BlackNoSplecular}
            />
          </group>
          <group
            position={[111.93, 79.91, 67.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.BasePlasticBottonsPuertasDelanterasIzquierda_Plastic45_0
                  .geometry
              }
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes[
                  "BottonsPuertasDelanterasIzquierda1_Buttons-Detail(text)_0"
                ].geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[-0.11, 0, 0.01]}
            />
            <mesh
              geometry={
                nodes[
                  "BottonsPuertasDelanterasIzquierda2_Buttons-Detail(text)_0"
                ].geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[-0.09, 0, 0.01]}
            />
            <mesh
              geometry={
                nodes[
                  "BottonsPuertasDelanterasIzquierda3_Buttons-Detail(text)_0"
                ].geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[-0.06, 0, 0.01]}
            />
            <mesh
              geometry={
                nodes[
                  "BottonsPuertasDelanterasIzquierda4_Buttons-Detail(text)_0"
                ].geometry
              }
              material={materials["Buttons-Detailtext"]}
            />
            <mesh
              geometry={
                nodes[
                  "BottonsPuertasDelanterasIzquierda5001_Buttons-Detail(text)_0"
                ].geometry
              }
              material={materials["Buttons-Detailtext"]}
              position={[-0.04, 0, 0]}
            />
            <mesh
              geometry={
                nodes[
                  "BottonsPuertasDelanterasIzquierda5_Buttons-Detail(text)_0"
                ].geometry
              }
              material={materials["Buttons-Detailtext"]}
            />
            <mesh
              geometry={
                nodes[
                  "BottonsPuertasDelanterasIzquierda6_Buttons-Detail(text)_0"
                ].geometry
              }
              material={materials["Buttons-Detailtext"]}
            />
          </group>
          <group
            position={[75.75, 51.05, 66.44]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.TapasAltavocesPuertasDelanteras_SpeakerRack_0.geometry
              }
              material={materials.SpeakerRack}
            />
            <mesh
              geometry={
                nodes.TapasAltavocesPuertasDelanteras_Plastic45_0.geometry
              }
              material={materials.Plastic45}
            />
          </group>
          <group
            position={[106.45, 79.32, -67.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.PlasticoReposabrazosPuertaDelanteraDerecha_Plastic45_0
                  .geometry
              }
              material={materials.Plastic45}
            />
            <mesh
              geometry={nodes["Cube147_Buttons-Detail(text)_0"].geometry}
              material={materials["Buttons-Detailtext"]}
              position={[0, -0.01, 0.01]}
            />
            <mesh
              geometry={nodes["Cube148_Buttons-Detail(text)_0"].geometry}
              material={materials["Buttons-Detailtext"]}
              position={[-0.04, -0.01, 0.02]}
            />
          </group>
          <group
            position={[105.47, 91.84, 66.63]}
            rotation={[Math.PI, 0.05, -Math.PI]}
            scale={100}
          >
            <mesh
              geometry={nodes.MarcoManetaPuertaDelantera_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.MarcoManetaPuertaDelantera_BlackNoSplecular_0.geometry
              }
              material={materials.BlackNoSplecular}
            />
            <mesh
              geometry={nodes.CageManetaPuertaDelantera_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.ManetaPuertaDelantera_BlackPlasticShiny_0.geometry
              }
              material={materials.BlackPlasticShiny}
            />
            <mesh
              geometry={nodes.BotonPuertaDelantera_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.SpeakerManetaPuertaDelantera_SpeakerRack_0.geometry
              }
              material={materials.SpeakerRack}
            />
            <mesh
              geometry={nodes.SpeakerManetaPuertaDelantera_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
          </group>
          <group
            position={[166.4, 108.83, 58.17]}
            rotation={[-2.97, 0.12, 1.9]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.EngancheCinturonAsientosDelanteros_Plastic45_0.geometry
              }
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.EngancheCinturonAsientosDelanteros2_Chrome15_0.geometry
              }
              material={materials.Chrome15}
              position={[0.04, 0, 0]}
            />
          </group>
          <group
            position={[170.24, 127.1, 55.64]}
            rotation={[2.78, 0, 1.74]}
            scale={100}
          >
            <mesh
              geometry={
                nodes.EngancheCinturonesDelanteros_WhitePlastic_0.geometry
              }
              material={materials.WhitePlastic}
            />
            <mesh
              geometry={nodes.PiezaCinturon_WhitePlastic_0.geometry}
              material={materials.WhitePlastic}
            />
          </group>
          <group
            position={[154.31, 58.23, 61.81]}
            rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
            scale={100}
          >
            <mesh
              geometry={nodes.EngancheCinturonPilarLateral_Plastic45_0.geometry}
              material={materials.Plastic45}
            />
            <mesh
              geometry={
                nodes.EngancheCinturonPilarLateralpalito_Plastic45_0.geometry
              }
              material={materials.Plastic45}
            />
          </group> */}
          <mesh
            geometry={nodes.TaponLlantaTrasera_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[250.47, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.LlantaTrasera_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[250.47, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.PneumaticoTrasero_Pneumatic_0.geometry}
            material={materials.Pneumatic}
            position={[258.66, 31.51, 71.88]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.TornillosLlantaTrasera_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[250.47, 0, 0]}
            rotation={[Math.PI / 2, -Math.PI / 5, -Math.PI]}
            scale={10}
          />
          <mesh
            geometry={nodes.DownBumperTrasero_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticoNegroTrasero_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[321.47, 81.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticoLucesTraseras_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[321.47, 81.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chasis_AletaLateral_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chasis_BajosLaterales_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Chasis_BumperDelanero_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chasis_LateralTrasero_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chasis_Maletero_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chasis_Manetas_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chasis_ParachoquesTrasero_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chassis_Capo_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chassis_PlasticoCargador_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontBajos_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontPlasticChasis_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[-55.79, 70.49, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PilarLateral001_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.AleronTecho_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chassis_Techo_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PilarLateral_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ManetaPuertasTraseras_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontBajos001_Cristal_0.geometry}
            material={materials.Cristal}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontBajos002_Plastic25_0.geometry}
            material={materials.Plastic25}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontBajos003_ChromedReflectors_0.geometry}
            material={materials.ChromedReflectors}
            position={[0, 0, -0.06]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.SensoresInterior_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.SensoresExterior_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10}
          /> */}
          <mesh
            geometry={
              nodes.FarosTraserosCirculoDividido_RearLampGlasses_0.geometry
            }
            material={materials.RearLampGlasses}
            position={[310.02, 81.41, 55.86]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.CristalCirculoLucesInterioresTraseras_RearLampGlasses_0
                .geometry
            }
            material={materials.RearLampGlasses}
            position={[309.93, 81.41, 55.86]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.CageCirculoLucesTraseras_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[309.93, 81.41, 55.86]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.LUZ_circuloLuzFarosTrasero_LedRearLight_0.geometry}
            material={materials.LedRearLight}
            position={[309.93, 81.41, 55.86]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.CristalLucesTraseras_Cristal_0.geometry}
            material={materials.Cristal}
            position={[322.32, 81.41, 55.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FaroTraseroPiezaNegra_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[307.69, 81.41, 55.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FarosTraserosCage_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[306.88, 81.41, 55.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CristalFarosDelanteros_Cristal_0.geometry}
            material={materials.Cristal}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.FaroTraseroPiezaNegra001_ChromedReflectors_0.geometry
            }
            material={materials.ChromedReflectors}
            position={[307.66, 81.41, 55.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.FaroTraseroPiezaNegra002_ChromedReflectors_0.geometry
            }
            material={materials.ChromedReflectors}
            position={[318.24, 81.86, 33.93]}
            rotation={[-Math.PI / 2, 0, -0.13]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.CristalCirculoLucesInterioresDelanteras_HeadLampGlasses_0
                .geometry
            }
            material={materials.HeadLampGlasses}
            position={[-43.68, 70.64, 55.86]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CageCirculoLucesDelanteras_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[-43.68, 70.64, 55.86]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.FarosDelanterosCirculoDividio_HeadLampGlasses_0.geometry
            }
            material={materials.HeadLampGlasses}
            position={[-43.68, 70.64, 55.86]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.LUZ_circuloLuzFarosDelanteros_LedFrontLight_0.geometry
            }
            material={materials.LedFrontLight}
            position={[-43.68, 70.64, 55.86]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FaroDelanteroPiezaNegra_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[-43.68, 70.64, 55.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CristalFaroDelantero_HeadLampGlasses_0.geometry}
            material={materials.HeadLampGlasses}
            position={[-43.68, 70.64, 55.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontLightsCage_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            position={[-43.68, 70.64, 55.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.CristalLateralEsquinaStickerBlack_WindowsBlackSticker_0
                .geometry
            }
            material={materials.WindowsBlackSticker}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.CristalTraseroStickerBlack_WindowsBlackSticker_0.geometry
            }
            material={materials.WindowsBlackSticker}
            position={[293.26, 120.44, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.FrontWindshieldStickerBlack_WindowsBlackSticker_0.geometry
            }
            material={materials.WindowsBlackSticker}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CristalLateralEsquina_Cristal_0.geometry}
            material={materials.Cristal}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CristalTrasero_CristalTintado_0.geometry}
            material={materials.CristalTintado}
            position={[288.27, 120.44, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontWindshield_Cristal_0.geometry}
            material={materials.Cristal}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomasWindshield_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomaWindshieldTop_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomaLateralTrianguloCristales_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.MarcoCristalesLateralesEsquinaTrasera_CarPaintBlack_0
                .geometry
            }
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.MarcoCristalesLateralesLateral_CarPaintBlack_0.geometry
            }
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomasPilarCristalesLaterales_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomaCristalTrasero_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ExteriorRetrovisorLateral_CarPaintBlack_0.geometry}
            material={materials.CarPaintBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.TapaBajosRetrovisoresLaterales_Plastic25_0.geometry}
            material={materials.Plastic25}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.IntermitenteRetrovisorLateral_RetroGlass_0.geometry}
            material={materials.RetroGlass}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.PiezaInetermitenteBase_CarPaintWhite_0.geometry}
            material={materials.CarPaintWhite}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.HondaLogosRuedasTraseras_FullChrome_0.geometry}
            material={materials.FullChrome}
            position={[258.67, 31.51, 83.54]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.BajosCocheExterior_CarUnderBlack_0.geometry}
            material={materials.CarUnderBlack}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CristalPlasticoNegroTrasero_Cristal_0.geometry}
            material={materials.Cristal}
            position={[321.47, 81.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-10, 10, 10]}
          />
          <mesh
            geometry={nodes.FrontBajosPalitos_Plastic25_0.geometry}
            material={materials.Plastic25}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.FrontBajosParrillaCooling_BlackNoSplecular_0.geometry
            }
            material={materials.BlackNoSplecular}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FrontBajosPlasticDetail_Plastic25_0.geometry}
            material={materials.Plastic25}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.HondaLetters_FullChrome_0.geometry}
            material={materials.FullChrome}
            position={[315.62, 97.76, 42.75]}
            rotation={[-Math.PI / 2, 0.83, Math.PI / 2]}
            scale={3.39}
          /> */}
          <mesh
            geometry={nodes.LimpiaTrasero_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[306.12, 108.87, 0]}
            rotation={[-Math.PI / 2, 0.72, -0.08]}
            scale={10}
          />
          {/* <mesh
            geometry={nodes.MatriculaDelantera_Matricula_0.geometry}
            material={materials.Matricula}
            position={[-60.02, 42.6, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.MatriculaTrasera_Matricula_0.geometry}
            material={materials.Matricula}
            position={[322.51, 43.84, 0]}
            rotation={[-Math.PI / 2, -0.07, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.PlasticoDebajoWindshield_Plastic25_0.geometry}
            material={materials.Plastic25}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.ReflectorTrasero_BackRedReflectors_0.geometry}
            material={materials.BackRedReflectors}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BlackVentanillasGoma001_BlackNoSplecular_0.geometry}
            material={materials.BlackNoSplecular}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />

          <mesh
            geometry={nodes.Cube_CameraLens_BlackShiny_0.geometry}
            material={materials.CameraLens_BlackShiny}
            position={[319.25, 81.74, -27.3]}
            rotation={[-Math.PI / 2, 0, 0.03]}
            scale={100}
          />
          <mesh
            geometry={nodes.AsientosParteInferior_WhiteClothCouches_0.geometry}
            material={materials.WhiteClothCouches}
            position={[117.08, 55.54, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BottonAsientosDelanteros_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[164.24, 123.47, 21.29]}
            rotation={[-1.49, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.PalancaPosicionamientoAsiento_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[128.42, 49.93, 56.84]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={
              nodes.PalancaPosicionamientoAsientoLarga_Plastic45_0.geometry
            }
            material={materials.Plastic45}
            position={[128.42, 49.93, 56.84]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticoAsientosLateral_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[128.42, 49.93, 57.15]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.PlasticoAsientosLateralGrande_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[128.42, 49.93, 56.84]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.PlasticoReposacabezasAsientosDelanteros_Plastic45_0.geometry
            }
            material={materials.Plastic45}
            position={[165.23, 124.63, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleAsientosDelanterosPlastico_Plastic45_0.geometry
            }
            material={materials.Plastic45}
            position={[165.23, 124.63, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.CilindrosMetalicosAsientosDelanteros_Chrome15_0.geometry
            }
            material={materials.Chrome15}
            position={[165.23, 124.63, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.TiritaTraseraAsientosDelanteros_WhiteClothCouches_0.geometry
            }
            material={materials.WhiteClothCouches}
            position={[152.86, 51.69, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.BajosAsientosDelanterosTapa_WhiteClothCouches_0.geometry
            }
            material={materials.WhiteClothCouches}
            position={[152.86, 51.69, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["EtiquetaAsientoDelantero_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[157.64, 102.35, 55.08]}
            rotation={[1.49, -0.93, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes[
                "EngancheCinturonesAsientosDelanteros_Buttons-Detail(text)_0"
              ].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[134.51, 58.31, -9.3]}
            rotation={[-Math.PI / 2, -0.27, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.RailesAsientosDelanteros_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[172.98, 37.84, 56.99]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RailesAsientosDelanteros2_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[172.98, 37.84, 56.99]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RailesAsientosDelanteros3_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[172.98, 37.84, 11.04]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.RailesAsientosDelanteros4_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[172.98, 37.84, 11.04]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.AsientoParteSuperior001_Sews_0.geometry}
            material={materials.Sews}
            position={[152.86, 51.69, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.AsientosParteInferior001_Sews_0.geometry}
            material={materials.Sews}
            position={[117.08, 55.54, 33.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.EngancheCinturonesAsientosDelanteros001_Plastic25_0.geometry
            }
            material={materials.Plastic25}
            position={[226.11, 60.12, -7.44]}
            rotation={[-Math.PI / 2, -0.43, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.EngancheCinturonesAsientosDelanteros002_Plastic25_0.geometry
            }
            material={materials.Plastic25}
            position={[134.51, 58.31, -9.3]}
            rotation={[-Math.PI / 2, -0.27, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AsientoTraseroParteSuperior_GrayClothCouches_0.geometry
            }
            material={materials.GrayClothCouches}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AsientoTraseroParteSuperiorReposacabezas_GrayClothCouches_0
                .geometry
            }
            material={materials.GrayClothCouches}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AsientoTraseroParteInferior_WhiteClothCouches_0.geometry
            }
            material={materials.WhiteClothCouches}
            position={[58.46, 105.53, 35]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AsientoTraseroCLothLateralUpper_GrayClothCouches_0.geometry
            }
            material={materials.GrayClothCouches}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AsientosTraserosParteInferiorDivision2_WhiteClothCouches_0
                .geometry
            }
            material={materials.WhiteClothCouches}
            position={[234.69, 62.16, 30.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AsientoTraseroParteSuperiorDivision2_WhiteClothCouches_0
                .geometry
            }
            material={materials.WhiteClothCouches}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AsientoTraseroCLothLateralDown_WhiteClothCouches_0.geometry
            }
            material={materials.WhiteClothCouches}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes
                .DetalleAsientosTraserosParteInferiorDivision3_WhiteClothCouches_0
                .geometry
            }
            material={materials.WhiteClothCouches}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonesAsientosTraseros_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[234.88, 71.58, 44.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.OscuroAsientosTraseros_WhiteClothCouches_0.geometry}
            material={materials.WhiteClothCouches}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ReposacabezasTrasero_GrayClothCouches_0.geometry}
            material={materials.GrayClothCouches}
            position={[245.39, 108.23, 30]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes[
                "EtiquetaReposacabezasAsientosTraseros_Buttons-Detail(text)_0"
              ].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[243.05, 113.25, 21.44]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes[
                "EtiquetaReposacabezasAsientosTraseros2_Buttons-Detail(text)_0"
              ].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[243.04, 113.25, -38.61]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes
                .TelaASientosTraserosParteInferiorCinturones_WhiteClothCouches_0
                .geometry
            }
            material={materials.WhiteClothCouches}
            position={[226.44, 58.4, 7.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["EngancheCinturonesTraseros_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[226.11, 60.12, -7.44]}
            rotation={[-Math.PI / 2, -0.43, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonesAsientosTraseros001_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[234.88, 71.58, 14.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonesAsientosTraseros002_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[234.88, 71.58, -44.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonesAsientosTraseros003_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[234.88, 71.58, -14.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.ReposacabezasTrasero002_Sews_0.geometry}
            material={materials.Sews}
            position={[245.39, 108.23, 30]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.ConsolaCentral1_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 63.41, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DetailConsolaCentral_BlackPlasticShiny_0.geometry}
            material={materials.BlackPlasticShiny}
            position={[118.39, 63.48, 0]}
            rotation={[-Math.PI / 2, -0.01, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["ConsolaCentralZonaBotonesInferior_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[118.39, 63.48, 0]}
            rotation={[-Math.PI / 2, -0.01, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonConsolaCentral1_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[118.39, 63.48, 0]}
            rotation={[-Math.PI / 2, -0.01, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonCOnsolaCentral2_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[118.94, 63.35, 1.74]}
            rotation={[-Math.PI / 2, -0.01, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["DetalleConsolaCentral_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[118.39, 63.41, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes[
                "ConsolaCentralZonaBotonesSuperiorBordes_Buttons-Detail(text)_0"
              ].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[125.39, 63.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["ConsolaCentralZonaBotonesSuperior_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[125.39, 63.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonCOnsolaCentral3_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[125.39, 63.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["ConsolaCentralBotonDetail_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[125.39, 63.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonCOnsolaCentral4_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[125.39, 63.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ConsolaCentralMadera_InteriorWood_0.geometry}
            material={materials.InteriorWood}
            position={[125.39, 63.52, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ConsolaCentralMainPlastic_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 63.41, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["ConsolaCentralParteTraseraBotones_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[125.39, 63.41, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.AlfombritaConsolaCentralBajos_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 63.41, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["TiritaConsolaCentral_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[125.39, 63.41, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.SoporteRetrovisorFrontal_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[92.65, 139.81, 0]}
            rotation={[-Math.PI / 2, -0.22, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.TechoInterior_RoofCloth_0.geometry}
            material={materials.RoofCloth}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.TechoInteriorDarkStiker_WindowsBlackSticker_0.geometry
            }
            material={materials.WindowsBlackSticker}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["TaponesAirbagTechoTraseros_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[231.67, 140.68, 46.59]}
            rotation={[-2.21, 0, 0.07]}
            scale={100}
          />
          <mesh
            geometry={nodes.TaponesTechoTraseros_WhitePlastic_0.geometry}
            material={materials.WhitePlastic}
            position={[255.46, 139.4, 24.33]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ReposaManosTechoFrontrales_WhitePlastic_0.geometry}
            material={materials.WhitePlastic}
            position={[132.16, 144.1, 46.05]}
            rotation={[-0.58, -0.02, 0.07]}
            scale={114.92}
          />
          <mesh
            geometry={nodes.DetalleTechoCorredizo_WhiteMetalShiny_0.geometry}
            material={materials.WhiteMetalShiny}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.techoCorredizo_RoofCloth_0.geometry}
            material={materials.RoofCloth}
            position={[-1.71, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RoofConsolePlastic_WhitePlastic_0.geometry}
            material={materials.WhitePlastic}
            position={[108.28, 141.68, 0]}
            rotation={[Math.PI / 2, 0.17, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsolePlasticSmall_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[Math.PI / 2, 0.17, 1.57]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleDetail_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleCentralButton_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleLightButtons_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleEmergencyButtonCage_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleButton_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleTransparentPlastic_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes["RoofConsoleTapa_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleLightsCage_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsolePlasticSmallLight_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[Math.PI / 2, 0.17, 1.57]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleEmergencyButton_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsolePlastic001_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[Math.PI / 2, 0.17, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleButtonDisplaced_Buttons-Detail(text)_0"]
                .geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["RoofConsoleLightsPlastic_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[108.28, 141.68, 0]}
            rotation={[-Math.PI / 2, -0.17, -Math.PI / 2]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.BaseCueroVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.BaseTraseraPlasticoVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.BaseDetailCentro_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.BotonesVolante1_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.CentroVolanteClaxon_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={
              nodes.BaseTraseraPlasticoVolanteTop_SteeringWheel_0.geometry
            }
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={89.22}
          />
          <mesh
            geometry={nodes.BotonesVolante2_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={89.22}
          />
          <mesh
            geometry={nodes.DetallesCageBotonesVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.DetallesVolanteExterior_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.TapaUnderVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.RueditaVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[99.81, 98.76, 43.25]}
            rotation={[-2.02, 1.22, 1.98]}
            scale={90}
          />
          <mesh
            geometry={nodes.BlackVolante_BlackNoSplecular_0.geometry}
            material={materials.BlackNoSplecular}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.CageLevasVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.BotonDerechoVolanteUnder_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.BaseTraseraVolante_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, 1.25, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.Intermitentes_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-0.42, 0.39, 0.7]}
            scale={90}
          />
          <mesh
            geometry={nodes.BolaIntermitentes_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-0.42, 0.39, 0.7]}
            scale={90}
          />
          <mesh
            geometry={nodes.HondaLogoVolante_FullChrome_0.geometry}
            material={materials.FullChrome}
            position={[102.58, 98.68, 33.01]}
            rotation={[-1.57, 1.25, 1.57]}
            scale={102.16}
          />
          <mesh
            geometry={nodes.DientesRueditaVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[99.81, 98.76, 43.25]}
            rotation={[-2.02, 1.22, 1.99]}
            scale={90}
          />
          <mesh
            geometry={nodes.LevasVolante_SteeringWheel_0.geometry}
            material={materials.SteeringWheel}
            position={[100.15, 98.45, 33.01]}
            rotation={[-Math.PI / 2, -0.32, Math.PI / 2]}
            scale={90}
          />
          <mesh
            geometry={nodes.PantallaCristal_CenterBigScreen_0.geometry}
            material={materials.CenterBigScreen}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ScreenCage_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PantallasRetrovisores_RetroScreens_0.geometry}
            material={materials.RetroScreens}
            position={[60.54, 105.53, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RetroScreenDetails_Plastic45_0.geometry}
            material={materials.Plastic45}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PantallaCristal001_CenterBigScreen_0.geometry}
            material={materials.CenterBigScreen}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PantallaBlack_ScreenTexture_0.geometry}
            material={materials.ScreenTexture}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes["RueditaDashboard_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[83.08, 97.38, -12.6]}
            rotation={[-Math.PI / 2, 0.02, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes["BotonStartCar_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[82.24, 94.13, 17.91]}
            rotation={[-Math.PI / 2, 1.16, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DetailBotonesDash_BlackPlasticShiny_0.geometry}
            material={materials.BlackPlasticShiny}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["BotonesDashvarios_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticDashBase_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticDashBaseDown_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticDashBase1_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticDashBase2_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticDashBase3_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticDashBase4_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.MaderaDash_InteriorWood_0.geometry}
            material={materials.InteriorWood}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PlasticGuantera_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ManetaGuantera_DashPatternPlastic_0.geometry}
            material={materials.DashPatternPlastic}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes["Radio001_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[91.81, 85.97, -3.5]}
            rotation={[-Math.PI / 2, -Math.PI / 9, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Radio002_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[91.81, 85.97, -3.5]}
            rotation={[-Math.PI / 2, -Math.PI / 9, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.PlasticoUnderDashboardCentral_DashPatternPlastic_0.geometry
            }
            material={materials.DashPatternPlastic}
            position={[91.81, 85.97, -3.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes["BaseUnderDash_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[91.81, 85.97, -3.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes["USBBasePlastic_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[74.97, 65.1, -4.91]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FiberUnderDash1_WhiteClothCouches_0.geometry}
            material={materials.WhiteClothCouches}
            position={[91.81, 85.97, -3.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FiberUnderDash2_WhiteClothCouches_0.geometry}
            material={materials.WhiteClothCouches}
            position={[91.81, 85.97, -3.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes["TapaUnderDash_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[75.09, 69.17, -7.95]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["TapaGrandeUnderDash_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[75.09, 69.76, -2.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes["EnchufeUnderDash_Buttons-Detail(text)_0"].geometry}
            material={materials["Buttons-Detailtext"]}
            position={[75.09, 69.76, -2.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["DetalleTapaUnderdAsh_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[75.09, 69.76, -2.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.PlasticoUpperDashboard_DashPatternPlastic_0.geometry
            }
            material={materials.DashPatternPlastic}
            position={[54.42, 108.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DetalleUpperDash_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[54.42, 108.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RejillaAireUpperDash_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[54.42, 108.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DetailAireCondicionado_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[64.38, 106.13, 41.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetailAireCondicionado2_BlackPlasticShiny_0.geometry
            }
            material={materials.BlackPlasticShiny}
            position={[64.38, 106.13, 41.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DireccionAireCondicionado_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.33, 92.11, 1.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DireccionAireCondicionado2_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.33, 92.11, -20.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[88.33, 92.11, -20.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado2_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[89.08, 92.11, 60.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ManetaAireAcondicionado_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.33, 92.11, 1.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado4_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[88.33, 92.11, 1.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DireccionAireCondicionado4_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.33, 92.11, 1.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DireccionAireCondicionado6_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.33, 92.11, -20.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ManetaAireAcondicionado2_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.33, 92.11, -20.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado5_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[88.33, 92.11, -20.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DireccionAireCondicionado3_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.61, 92.11, -52.82]}
            rotation={[-Math.PI / 2, 0, -0.03]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado3_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[88.61, 92.11, -52.82]}
            rotation={[-Math.PI / 2, 0, -0.03]}
            scale={100}
          />
          <mesh
            geometry={nodes.DireccionAireCondicionado5_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.61, 92.11, -52.82]}
            rotation={[-Math.PI / 2, 0, -0.03]}
            scale={100}
          />
          <mesh
            geometry={nodes.ManetaAireAcondicionado3_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[88.61, 92.11, -52.82]}
            rotation={[-Math.PI / 2, 0, -0.03]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado6_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[88.61, 92.11, -52.82]}
            rotation={[-Math.PI / 2, 0, -0.03]}
            scale={100}
          />
          <mesh
            geometry={nodes.DireccionAireCondicionado7_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[89.08, 92.11, 60.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DireccionAireCondicionado8_DashPatternPlastic_0.geometry
            }
            material={materials.DashPatternPlastic}
            position={[89.08, 92.11, 55.97]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ManetaAireAcondicionado4_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[89.08, 92.11, 60.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado3001_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[88.33, 92.11, 1.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.DetalleDireccionAireCondicionado7_BlackPlasticShiny_0
                .geometry
            }
            material={materials.BlackPlasticShiny}
            position={[89.08, 92.03, 60.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes["DetailAireCondicionado001_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[64.38, 106.13, 41.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BlackBehindSterringWheel_Rubber_0.geometry}
            material={materials.Rubber}
            position={[64.38, 106.13, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PalancaPedalAcelerador_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[54.45, 55.42, 15.78]}
            rotation={[-Math.PI / 2, 1.04, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.PalancaPedalFreno_Plastic25_0.geometry}
            material={materials.Plastic25}
            position={[53.66, 56.77, 28.89]}
            rotation={[-Math.PI / 2, 1.04, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.PedalFreno_Pedales_0.geometry}
            material={materials.Pedales}
            position={[53.66, 56.77, 28.89]}
            rotation={[-Math.PI / 2, 1.04, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.PedalAcelerador_Pedales_0.geometry}
            material={materials.Pedales}
            position={[54.45, 55.42, 15.78]}
            rotation={[-Math.PI / 2, 1.04, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.DecoracionLateralPedales_Pedales_0.geometry}
            material={materials.Pedales}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ClothPuertaTrasera_GrayClothCouches_0.geometry}
            material={materials.GrayClothCouches}
            position={[60.54, 105.53, 40.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GuanteritaPuertasTraseras_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[60.54, 105.53, 41.13]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.LamelunasInteriorPuertasTraseras_Rubber_0.geometry}
            material={materials.Rubber}
            position={[60.54, 105.53, 40.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.TrianguloTraseroPlasticoPuertas_Plastic45_0.geometry
            }
            material={materials.Plastic45}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ClothPuertaTrasera001_Sews_0.geometry}
            material={materials.Sews}
            position={[60.54, 105.53, 40.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.ReposabrazosClothPuertaDelantera_WhiteClothCouches_0
                .geometry
            }
            material={materials.WhiteClothCouches}
            position={[60.54, 105.53, 43.93]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GuanteritaPuertasDelanteras_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[60.54, 105.53, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ClothPuertasDelanteras_GrayClothCouches_0.geometry}
            material={materials.GrayClothCouches}
            position={[60.54, 105.53, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.LamelunasInteriorPuertrasDelanteras_Rubber_0.geometry
            }
            material={materials.Rubber}
            position={[60.54, 105.53, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.ClothPuertasDelanteras001_Sews_0.geometry}
            material={materials.Sews}
            position={[60.54, 105.53, 40.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.GomaInteriorCristalesTraserosTriangulo_Rubber_0.geometry
            }
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomasVentanasInterioresDelanteras_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomasVentanasInterioresTraseras_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomaBlackEsquinas_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BlackVentanillasGoma_BlackNoSplecular_0.geometry}
            material={materials.BlackNoSplecular}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GomaRaraDelantera_Rubber_0.geometry}
            material={materials.Rubber}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BaseSueloInterior_InteriorFloor_0.geometry}
            material={materials.InteriorFloor}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BarraPasaPuerta_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Piezasuelo1_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PalancaAbrirCapo_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Piezasuelo2_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BarraPasaPuertaTrasera_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.AlfombrillaDelanteraDerecha_InteriorFloor_0.geometry
            }
            material={materials.InteriorFloor}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={
              nodes.AlfombrillaDelanteraIzquierda_InteriorFloor_0.geometry
            }
            material={materials.InteriorFloor}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.AlfombrillasLaterales_InteriorFloor_0.geometry}
            material={materials.InteriorFloor}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.PiezaSueloTapa_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[125.39, 68.92, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.TapaMaletero_InteriorFloor_0.geometry}
            material={materials.InteriorFloor}
            position={[275.31, 108.7, 0.15]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.MetalMaletero_WhiteMetalShiny_0.geometry}
            material={materials.WhiteMetalShiny}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.PlasticoTraseroLuzMaletero_Plastic45_0.geometry}
            material={materials.Plastic45}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={
              nodes["BotonPilarLateral_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            position={[174.81, 97.76, 61.59]}
            rotation={[-Math.PI / 2, 0.09, 0]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.CinturonAsientosDelanteros_SeatBelt_0.geometry}
            material={materials.SeatBelt}
            position={[168.79, 118.92, 57.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.MarcoBotonPilarLateral_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[174.82, 97.75, 61.59]}
            rotation={[-Math.PI / 2, 0.09, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.PilarLateralParteInferior_WhitePlastic_0.geometry}
            material={materials.WhitePlastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.PilarLateralParteInferior001_Plastic45_0.geometry}
            material={materials.Plastic45}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={
              nodes.DetalleEngancheCinturonPilarLateral_Plastic45_0.geometry
            }
            material={materials.Plastic45}
            position={[168.79, 118.92, 57.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          <mesh
            geometry={
              nodes.PilaresInteriorFrontalesLaterales_WhitePlastic_0.geometry
            }
            material={materials.WhitePlastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.CageAiresPilarFrontale_WhitePlastic_0.geometry}
            material={materials.WhitePlastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.DireccionAirePilarFrontal_WhitePlastic_0.geometry}
            material={materials.WhitePlastic}
            position={[74.8, 111.52, 61.76]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.OscuroPilarFrontal_BlackNoSplecular_0.geometry}
            material={materials.BlackNoSplecular}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={
              nodes.DireccionAirePilarFrontalLargo_WhitePlastic_0.geometry
            }
            material={materials.WhitePlastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={
              nodes["TapaAirbagPilarFrontal_Buttons-Detail(text)_0"].geometry
            }
            material={materials["Buttons-Detailtext"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.BlackCinturonTrasero_BlackNoSplecular_0.geometry}
            material={materials.BlackNoSplecular}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          <mesh
            geometry={nodes.TiraCinturonAsientosTraseros_SeatBelt_0.geometry}
            material={materials.SeatBelt}
            position={[252.22, 128.37, 54.17]}
            rotation={[-1.9, 0.69, -1.46]}
            scale={100}
          />
          {/* <mesh
            geometry={nodes.AletasTraserasInterior_WhitePlastic_0.geometry}
            material={materials.WhitePlastic}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.PlasticoMaletero_Plastic45_0.geometry}
            material={materials.Plastic45}
            position={[-2.07, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.Plane024_ScreenTexture_0.geometry}
            material={materials.ScreenTexture}
            position={[77.38, 104.71, -0.18]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.Plane040_ScreenTexture_0.geometry}
            material={materials.ScreenTexture}
            position={[77.38, 106.04, 33]}
            rotation={[0, Math.PI / 2, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.Sombra_SombraSuelo_0.geometry}
            material={materials.SombraSuelo}
            position={[0, -0.54, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
          {/* <mesh
            geometry={nodes.Xlay3d001_Xlay3d_0.geometry}
            material={materials.Xlay3d}
            position={[137.07, -0.05, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          /> */}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./MODELS/car.gltf");
