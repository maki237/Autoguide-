import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface RouteCarSceneProps {
  carModelUrl?: string;
}

export default function RouteCarScene({
  carModelUrl,
}: RouteCarSceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    /* =========================================================
       SCENE
    ========================================================= */

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x09110d);

    scene.fog = new THREE.FogExp2(
      0x09110d,
      0.004
    );

    /* =========================================================
       CAMERA
    ========================================================= */

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      500
    );

    camera.position.set(
      -10,
      8,
      19
    );

    /* =========================================================
       RENDERER
    ========================================================= */

    const renderer =
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio,
        2
      )
    );

    renderer.setSize(
      mount.clientWidth,
      mount.clientHeight
    );

    renderer.outputColorSpace =
      THREE.SRGBColorSpace;

    renderer.toneMapping =
      THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure =
      0.9;

    mount.appendChild(
      renderer.domElement
    );

    /* =========================================================
       CONTROLS
    ========================================================= */

    const controls =
      new OrbitControls(
        camera,
        renderer.domElement
      );

    controls.enableDamping = true;

    controls.enablePan = false;

    controls.minDistance = 10;

    controls.maxDistance = 32;

    controls.maxPolarAngle =
      Math.PI / 2.15;

    controls.target.set(
      0,
      0,
      -10
    );

    /* =========================================================
       LIGHTING
    ========================================================= */

    const ambientLight =
      new THREE.AmbientLight(
        0x9fb4cc,
        0.45
      );

    scene.add(ambientLight);

    const hemisphereLight =
      new THREE.HemisphereLight(
        0x9fb4cc,
        0x162018,
        0.65
      );

    scene.add(
      hemisphereLight
    );

    const moonLight =
      new THREE.DirectionalLight(
        0xc8d8e8,
        0.7
      );

    moonLight.position.set(
      -20,
      30,
      10
    );

    scene.add(
      moonLight
    );

    /* =========================================================
       ROAD
    ========================================================= */

    const roadWidth = 7;

    const roadLength = 260;

    /* -----------------------------
       ASPHALT TEXTURE
    ----------------------------- */

    const asphaltCanvas =
      document.createElement(
        "canvas"
      );

    asphaltCanvas.width = 512;
    asphaltCanvas.height = 512;

    const asphaltContext =
      asphaltCanvas.getContext(
        "2d"
      );

    if (!asphaltContext) {
      renderer.dispose();
      return;
    }

    asphaltContext.fillStyle =
      "#363b40";

    asphaltContext.fillRect(
      0,
      0,
      512,
      512
    );

    for (
      let i = 0;
      i < 20000;
      i++
    ) {
      const x =
        Math.random() * 512;

      const y =
        Math.random() * 512;

      const gray =
        35 +
        Math.random() * 30;

      asphaltContext.fillStyle = `
        rgb(
          ${gray},
          ${gray},
          ${gray + 3}
        )
      `;

      asphaltContext.fillRect(
        x,
        y,
        1,
        1
      );
    }

    const asphaltTexture =
      new THREE.CanvasTexture(
        asphaltCanvas
      );

    asphaltTexture.wrapS =
      THREE.RepeatWrapping;

    asphaltTexture.wrapT =
      THREE.RepeatWrapping;

    asphaltTexture.repeat.set(
      3,
      25
    );

    /* -----------------------------
       MATTE ROAD
    ----------------------------- */

    const roadMaterial =
      new THREE.MeshStandardMaterial({
        map: asphaltTexture,

        color: 0x42484e,

        roughness: 1,

        metalness: 0,
      });

    const roadGeometry =
      new THREE.PlaneGeometry(
        roadWidth,
        roadLength,
        1,
        1
      );

    const road =
      new THREE.Mesh(
        roadGeometry,
        roadMaterial
      );

    road.rotation.x =
      -Math.PI / 2;

    road.position.z =
      -roadLength / 2 + 10;

    scene.add(road);

    /* =========================================================
       GRASS
    ========================================================= */

    const grassCanvas =
      document.createElement(
        "canvas"
      );

    grassCanvas.width = 512;
    grassCanvas.height = 512;

    const grassContext =
      grassCanvas.getContext(
        "2d"
      );

    if (!grassContext) {
      renderer.dispose();
      return;
    }

    grassContext.fillStyle =
      "#315b35";

    grassContext.fillRect(
      0,
      0,
      512,
      512
    );

    for (
      let i = 0;
      i < 22000;
      i++
    ) {
      const x =
        Math.random() * 512;

      const y =
        Math.random() * 512;

      const green =
        55 +
        Math.random() * 45;

      grassContext.fillStyle = `
        rgb(
          ${20 + Math.random() * 20},
          ${green},
          ${25 + Math.random() * 20}
        )
      `;

      grassContext.fillRect(
        x,
        y,
        2,
        2
      );
    }

    const grassTexture =
      new THREE.CanvasTexture(
        grassCanvas
      );

    grassTexture.wrapS =
      THREE.RepeatWrapping;

    grassTexture.wrapT =
      THREE.RepeatWrapping;

    grassTexture.repeat.set(
      18,
      35
    );

    const groundMaterial =
      new THREE.MeshStandardMaterial({
        map: grassTexture,

        color: 0x467542,

        roughness: 1,

        metalness: 0,
      });

    const groundGeometry =
      new THREE.PlaneGeometry(
        150,
        300
      );

    const ground =
      new THREE.Mesh(
        groundGeometry,
        groundMaterial
      );

    ground.rotation.x =
      -Math.PI / 2;

    ground.position.y =
      -0.08;

    ground.position.z =
      -100;

    scene.add(ground);

    /* =========================================================
       ROAD EDGES
    ========================================================= */

    const edgeMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x777777,

        transparent: true,

        opacity: 0.35,
      });

    const edgeGeometry =
      new THREE.BoxGeometry(
        0.06,
        0.025,
        roadLength
      );

    const leftEdge =
      new THREE.Mesh(
        edgeGeometry,
        edgeMaterial
      );

    leftEdge.position.set(
      -roadWidth / 2 + 0.12,
      0.02,
      road.position.z
    );

    scene.add(leftEdge);

    const rightEdge =
      leftEdge.clone();

    rightEdge.position.x =
      roadWidth / 2 - 0.12;

    scene.add(rightEdge);

    /* =========================================================
       ROAD CENTER MARKINGS
    ========================================================= */

    const markingMaterial =
      new THREE.MeshBasicMaterial({
        color: 0xd9d9c8,

        transparent: true,

        opacity: 0.6,
      });

    for (
      let i = 0;
      i < 35;
      i++
    ) {
      const marking =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            0.12,
            0.025,
            2
          ),
          markingMaterial
        );

      marking.position.set(
        0,
        0.025,
        7 - i * 7
      );

      scene.add(marking);
    }

    /* =========================================================
       GPS ROUTE
    ========================================================= */

    const routePoints: THREE.Vector3[] =
      [];

    for (
      let i = 0;
      i < 90;
      i++
    ) {
      const z =
        8 - i * 3.1;

      const x =
        Math.sin(i * 0.32) *
          1.7 +
        Math.sin(i * 0.11) *
          0.65;

      routePoints.push(
        new THREE.Vector3(
          x,
          0.075,
          z
        )
      );
    }

    const routeCurve =
      new THREE.CatmullRomCurve3(
        routePoints
      );

    routeCurve.curveType =
      "catmullrom";

    routeCurve.tension =
      0.35;

    /* -----------------------------
       GPS MAIN LINE
    ----------------------------- */

    const gpsGeometry =
      new THREE.TubeGeometry(
        routeCurve,
        250,
        0.045,
        8,
        false
      );

    const gpsMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x25bfff,

        transparent: true,

        opacity: 0.9,
      });

    const gpsLine =
      new THREE.Mesh(
        gpsGeometry,
        gpsMaterial
      );

    scene.add(gpsLine);

    /* -----------------------------
       VERY SUBTLE GPS GLOW
    ----------------------------- */

    const gpsGlowGeometry =
      new THREE.TubeGeometry(
        routeCurve,
        250,
        0.11,
        8,
        false
      );

    const gpsGlowMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x25bfff,

        transparent: true,

        opacity: 0.025,

        blending:
          THREE.AdditiveBlending,

        depthWrite: false,
      });

    const gpsGlow =
      new THREE.Mesh(
        gpsGlowGeometry,
        gpsGlowMaterial
      );

    scene.add(gpsGlow);

    /* =========================================================
       DESTINATION
    ========================================================= */

    const destination =
      routePoints[
        routePoints.length - 1
      ].clone();

    destination.y = 0.11;

    const destinationRing =
      new THREE.Mesh(
        new THREE.RingGeometry(
          0.45,
          0.58,
          48
        ),
        new THREE.MeshBasicMaterial({
          color: 0x25bfff,

          transparent: true,

          opacity: 0.85,

          side: THREE.DoubleSide,
        })
      );

    destinationRing.rotation.x =
      -Math.PI / 2;

    destinationRing.position.copy(
      destination
    );

    scene.add(
      destinationRing
    );

    const destinationCore =
      new THREE.Mesh(
        new THREE.SphereGeometry(
          0.15,
          20,
          20
        ),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
        })
      );

    destinationCore.position.copy(
      destination
    );

    scene.add(
      destinationCore
    );

    /* =========================================================
       LAMPADAIRES
    ========================================================= */

    const streetLights =
      new THREE.Group();

    scene.add(
      streetLights
    );

    function createStreetLight(
      side: number,
      z: number
    ) {
      const lamp =
        new THREE.Group();

      const x =
        side *
        (roadWidth / 2 + 1.3);

      lamp.position.set(
        x,
        0,
        z
      );

      /* -----------------------------
         POTEAU
      ----------------------------- */

      const poleMaterial =
        new THREE.MeshStandardMaterial({
          color: 0x1d2328,

          roughness: 0.85,

          metalness: 0.1,
        });

      const pole =
        new THREE.Mesh(
          new THREE.CylinderGeometry(
            0.055,
            0.085,
            4.2,
            10
          ),
          poleMaterial
        );

      pole.position.y =
        2.1;

      lamp.add(pole);

      /* -----------------------------
         BRAS
      ----------------------------- */

      const arm =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            0.8,
            0.065,
            0.065
          ),
          poleMaterial
        );

      arm.position.set(
        side > 0
          ? -0.32
          : 0.32,
        4.05,
        0
      );

      lamp.add(arm);

      /* -----------------------------
         TÊTE
      ----------------------------- */

      const head =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            0.32,
            0.13,
            0.4
          ),
          poleMaterial
        );

      head.position.set(
        side > 0
          ? -0.7
          : 0.7,
        3.98,
        0
      );

      lamp.add(head);

      /* -----------------------------
         AMPOULE
      ----------------------------- */

      const bulb =
        new THREE.Mesh(
          new THREE.SphereGeometry(
            0.075,
            16,
            16
          ),
          new THREE.MeshBasicMaterial({
            color: 0xffe6a0,
          })
        );

      bulb.position.set(
        side > 0
          ? -0.7
          : 0.7,
        3.88,
        0
      );

      lamp.add(bulb);

      /* -----------------------------
         LUMIÈRE
      ----------------------------- */

      const light =
        new THREE.PointLight(
          0xffd98a,
          2.2,
          9,
          2
        );

      light.position.set(
        side > 0
          ? -0.7
          : 0.7,
        3.85,
        0
      );

      lamp.add(light);

      /* -----------------------------
         HALO AU SOL
      ----------------------------- */

      const lightCircle =
        new THREE.Mesh(
          new THREE.CircleGeometry(
            1.8,
            32
          ),
          new THREE.MeshBasicMaterial({
            color: 0xffd98a,

            transparent: true,

            opacity: 0.045,

            depthWrite: false,
          })
        );

      lightCircle.rotation.x =
        -Math.PI / 2;

      lightCircle.position.y =
        0.012;

      lamp.add(
        lightCircle
      );

      streetLights.add(
        lamp
      );
    }

    for (
      let i = 0;
      i < 20;
      i++
    ) {
      const z =
        5 - i * 9;

      createStreetLight(
        -1,
        z
      );

      createStreetLight(
        1,
        z
      );
    }

    /* =========================================================
       BUILDINGS
    ========================================================= */

    const buildings =
      new THREE.Group();

    scene.add(
      buildings
    );

    const buildingColors = [
      0x475665,
      0x536474,
      0x5b6b7b,
      0x3e4c5a,
    ];

    function createBuilding(
      x: number,
      z: number,
      width: number,
      height: number,
      depth: number
    ) {
      const material =
        new THREE.MeshStandardMaterial({
          color:
            buildingColors[
              Math.floor(
                Math.random() *
                  buildingColors.length
              )
            ],

          roughness: 0.85,

          metalness: 0,

          emissive: 0x0d151c,

          emissiveIntensity: 0.25,
        });

      const building =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            width,
            height,
            depth
          ),
          material
        );

      building.position.set(
        x,
        height / 2,
        z
      );

      buildings.add(
        building
      );

      /* -----------------------------
         FENÊTRES
      ----------------------------- */

      const windowMaterial =
        new THREE.MeshBasicMaterial({
          color: 0xffd98a,

          transparent: true,

          opacity: 0.48,
        });

      const rows =
        Math.max(
          2,
          Math.floor(
            height / 1.5
          )
        );

      const cols =
        Math.max(
          2,
          Math.floor(
            width / 1.1
          )
        );

      for (
        let row = 0;
        row < rows;
        row++
      ) {
        for (
          let col = 0;
          col < cols;
          col++
        ) {
          if (
            Math.random() >
            0.58
          ) {
            continue;
          }

          const window =
            new THREE.Mesh(
              new THREE.PlaneGeometry(
                0.28,
                0.4
              ),
              windowMaterial
            );

          window.position.set(
            x -
              width / 2 +
              0.5 +
              col * 1.05,

            0.8 +
              row * 1.35,

            z -
              depth / 2 -
              0.01
          );

          buildings.add(
            window
          );
        }
      }
    }

    for (
      let i = 0;
      i < 32;
      i++
    ) {
      const side =
        Math.random() > 0.5
          ? 1
          : -1;

      const x =
        side *
        (
          roadWidth / 2 +
          4 +
          Math.random() * 7
        );

      const z =
        -Math.random() * 180;

      createBuilding(
        x,
        z,
        2 +
          Math.random() * 3,
        2 +
          Math.random() * 8,
        2 +
          Math.random() * 3
      );
    }

    /* =========================================================
       TREES
    ========================================================= */

    const trees =
      new THREE.Group();

    scene.add(trees);

    function createTree(
      x: number,
      z: number
    ) {
      const trunk =
        new THREE.Mesh(
          new THREE.CylinderGeometry(
            0.1,
            0.16,
            1.2,
            8
          ),
          new THREE.MeshStandardMaterial({
            color: 0x342820,

            roughness: 1,
          })
        );

      trunk.position.set(
        x,
        0.6,
        z
      );

      trees.add(
        trunk
      );

      const crown =
        new THREE.Mesh(
          new THREE.SphereGeometry(
            0.8,
            10,
            10
          ),
          new THREE.MeshStandardMaterial({
            color: 0x1f4528,

            roughness: 1,
          })
        );

      crown.position.set(
        x,
        1.45,
        z
      );

      trees.add(
        crown
      );
    }

    for (
      let i = 0;
      i < 45;
      i++
    ) {
      const side =
        Math.random() > 0.5
          ? 1
          : -1;

      createTree(
        side *
          (
            roadWidth / 2 +
            2 +
            Math.random() * 7
          ),
        -Math.random() *
          185
      );
    }

    /* =========================================================
       TRAFFIC LIGHT
    ========================================================= */

    const trafficLight =
      new THREE.Group();

    trafficLight.position.set(
      4.5,
      2.2,
      -15
    );

    scene.add(
      trafficLight
    );

    const trafficPole =
      new THREE.Mesh(
        new THREE.CylinderGeometry(
          0.07,
          0.08,
          4.4,
          10
        ),
        new THREE.MeshStandardMaterial({
          color: 0x1c2228,

          roughness: 0.8,
        })
      );

    trafficPole.position.y =
      -2;

    trafficLight.add(
      trafficPole
    );

    const trafficBox =
      new THREE.Mesh(
        new THREE.BoxGeometry(
          0.6,
          1.5,
          0.45
        ),
        new THREE.MeshStandardMaterial({
          color: 0x11161c,

          roughness: 0.8,
        })
      );

    trafficLight.add(
      trafficBox
    );

    const red =
      new THREE.Mesh(
        new THREE.SphereGeometry(
          0.12,
          16,
          16
        ),
        new THREE.MeshBasicMaterial({
          color: 0xff3344,
        })
      );

    red.position.set(
      0,
      0.4,
      0.24
    );

    trafficLight.add(
      red
    );

    const orange =
      new THREE.Mesh(
        new THREE.SphereGeometry(
          0.12,
          16,
          16
        ),
        new THREE.MeshBasicMaterial({
          color: 0xffb020,
        })
      );

    orange.position.set(
      0,
      0,
      0.24
    );

    trafficLight.add(
      orange
    );

    const green =
      new THREE.Mesh(
        new THREE.SphereGeometry(
          0.12,
          16,
          16
        ),
        new THREE.MeshBasicMaterial({
          color: 0x35e28a,
        })
      );

    green.position.set(
      0,
      -0.4,
      0.24
    );

    trafficLight.add(
      green
    );

    /* =========================================================
       CAR
    ========================================================= */

    const carContainer =
      new THREE.Group();

    scene.add(
      carContainer
    );

    let carObject:
      THREE.Object3D;

    function createProceduralCar() {
      const car =
        new THREE.Group();

      /* -----------------------------
         CAR BODY
      ----------------------------- */

      const bodyMaterial =
        new THREE.MeshStandardMaterial({
          color: 0xe9edf1,

          roughness: 0.5,

          metalness: 0.05,
        });

      const body =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            1.7,
            0.45,
            3.3
          ),
          bodyMaterial
        );

      body.position.y =
        0.55;

      car.add(body);

      /* -----------------------------
         CABIN
      ----------------------------- */

      const cabinMaterial =
        new THREE.MeshStandardMaterial({
          color: 0x111a24,

          roughness: 0.3,

          metalness: 0.05,
        });

      const cabin =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            1.35,
            0.55,
            1.65
          ),
          cabinMaterial
        );

      cabin.position.set(
        0,
        0.93,
        -0.15
      );

      car.add(cabin);

      /* -----------------------------
         CAPOT
      ----------------------------- */

      const hood =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            1.45,
            0.18,
            0.9
          ),
          bodyMaterial
        );

      hood.position.set(
        0,
        0.78,
        1.1
      );

      car.add(hood);

      /* -----------------------------
         WHEELS
      ----------------------------- */

      const wheelMaterial =
        new THREE.MeshStandardMaterial({
          color: 0x11151a,

          roughness: 0.95,

          metalness: 0,
        });

      const wheelGeometry =
        new THREE.CylinderGeometry(
          0.38,
          0.38,
          0.22,
          24
        );

      const wheelPositions = [
        [-0.92, 0.38, 1.0],
        [0.92, 0.38, 1.0],
        [-0.92, 0.38, -1.0],
        [0.92, 0.38, -1.0],
      ];

      wheelPositions.forEach(
        ([x, y, z]) => {
          const wheel =
            new THREE.Mesh(
              wheelGeometry,
              wheelMaterial
            );

          wheel.rotation.z =
            Math.PI / 2;

          wheel.position.set(
            x,
            y,
            z
          );

          car.add(wheel);
        }
      );

      /* -----------------------------
         PHARES
      ----------------------------- */

      const headlightMaterial =
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
        });

      const leftHeadlight =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            0.35,
            0.15,
            0.08
          ),
          headlightMaterial
        );

      leftHeadlight.position.set(
        -0.55,
        0.65,
        1.67
      );

      car.add(
        leftHeadlight
      );

      const rightHeadlight =
        leftHeadlight.clone();

      rightHeadlight.position.x =
        0.55;

      car.add(
        rightHeadlight
      );

      /* -----------------------------
         FEUX ARRIÈRE
      ----------------------------- */

      const tailMaterial =
        new THREE.MeshBasicMaterial({
          color: 0xff3344,
        });

      const leftTail =
        new THREE.Mesh(
          new THREE.BoxGeometry(
            0.35,
            0.15,
            0.08
          ),
          tailMaterial
        );

      leftTail.position.set(
        -0.55,
        0.65,
        -1.67
      );

      car.add(
        leftTail
      );

      const rightTail =
        leftTail.clone();

      rightTail.position.x =
        0.55;

      car.add(
        rightTail
      );

      /* -----------------------------
         PHARES PROJECTEURS
      ----------------------------- */

      const leftSpot =
        new THREE.SpotLight(
          0xffffff,
          5,
          14,
          Math.PI / 8,
          0.5,
          1.5
        );

      leftSpot.position.set(
        -0.55,
        0.7,
        1.7
      );

      const leftTarget =
        new THREE.Object3D();

      leftTarget.position.set(
        -0.55,
        0,
        8
      );

      car.add(
        leftSpot,
        leftTarget
      );

      leftSpot.target =
        leftTarget;

      const rightSpot =
        new THREE.SpotLight(
          0xffffff,
          5,
          14,
          Math.PI / 8,
          0.5,
          1.5
        );

      rightSpot.position.set(
        0.55,
        0.7,
        1.7
      );

      const rightTarget =
        new THREE.Object3D();

      rightTarget.position.set(
        0.55,
        0,
        8
      );

      car.add(
        rightSpot,
        rightTarget
      );

      rightSpot.target =
        rightTarget;

      carContainer.add(
        car
      );

      return car;
    }

    if (carModelUrl) {
      const loader =
        new GLTFLoader();

      loader.load(
        carModelUrl,
        (gltf) => {
          carObject =
            gltf.scene;

          carObject.scale.set(
            1.4,
            1.4,
            1.4
          );

          carObject.position.y =
            0.15;

          carContainer.add(
            carObject
          );
        },
        undefined,
        () => {
          carObject =
            createProceduralCar();
        }
      );
    } else {
      carObject =
        createProceduralCar();
    }

    /* =========================================================
       DÉTECTION
    ========================================================= */

    const detectionRing =
      new THREE.Mesh(
        new THREE.RingGeometry(
          1.7,
          1.74,
          64
        ),
        new THREE.MeshBasicMaterial({
          color: 0x25bfff,

          transparent: true,

          opacity: 0.18,

          side: THREE.DoubleSide,
        })
      );

    detectionRing.rotation.x =
      -Math.PI / 2;

    detectionRing.position.y =
      0.04;

    scene.add(
      detectionRing
    );

    /* =========================================================
       PIÉTON
    ========================================================= */

    const pedestrian =
      new THREE.Group();

    pedestrian.position.set(
      -3,
      0,
      -27
    );

    scene.add(
      pedestrian
    );

    const personMaterial =
      new THREE.MeshStandardMaterial({
        color: 0xffa726,

        roughness: 0.8,

        emissive: 0x6a2b00,

        emissiveIntensity: 0.25,
      });

    const head =
      new THREE.Mesh(
        new THREE.SphereGeometry(
          0.18,
          16,
          16
        ),
        personMaterial
      );

    head.position.y =
      1.65;

    pedestrian.add(
      head
    );

    const bodyPerson =
      new THREE.Mesh(
        new THREE.CapsuleGeometry(
          0.22,
          0.8,
          6,
          12
        ),
        personMaterial
      );

    bodyPerson.position.y =
      1;

    pedestrian.add(
      bodyPerson
    );

    const pedestrianRing =
      new THREE.Mesh(
        new THREE.RingGeometry(
          0.6,
          0.67,
          40
        ),
        new THREE.MeshBasicMaterial({
          color: 0xffa726,

          transparent: true,

          opacity: 0.45,

          side: THREE.DoubleSide,
        })
      );

    pedestrianRing.rotation.x =
      -Math.PI / 2;

    pedestrianRing.position.y =
      0.03;

    pedestrian.add(
      pedestrianRing
    );

    /* =========================================================
       ÉTOILES
    ========================================================= */

    const starGeometry =
      new THREE.BufferGeometry();

    const starPositions: number[] =
      [];

    for (
      let i = 0;
      i < 500;
      i++
    ) {
      starPositions.push(
        (Math.random() - 0.5) *
          180,

        20 +
          Math.random() * 80,

        -Math.random() * 220
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        starPositions,
        3
      )
    );

    const starMaterial =
      new THREE.PointsMaterial({
        color: 0xffffff,

        size: 0.1,

        transparent: true,

        opacity: 0.5,
      });

    const stars =
      new THREE.Points(
        starGeometry,
        starMaterial
      );

    scene.add(stars);

    /* =========================================================
       BLOOM TRÈS FAIBLE
    ========================================================= */

    const composer =
      new EffectComposer(
        renderer
      );

    const renderPass =
      new RenderPass(
        scene,
        camera
      );

    composer.addPass(
      renderPass
    );

    const bloom =
      new UnrealBloomPass(
        new THREE.Vector2(
          mount.clientWidth,
          mount.clientHeight
        ),
        0.06,
        0.12,
        0.5
      );

    composer.addPass(
      bloom
    );

    /* =========================================================
       ANIMATION
    ========================================================= */

    const clock =
      new THREE.Clock();

    const carPosition =
      new THREE.Vector3();

    const nextPosition =
      new THREE.Vector3();

    const direction =
      new THREE.Vector3();

    let progress = 0;

    function animate() {
      const elapsed =
        clock.getElapsedTime();

      /* -----------------------------
         VOITURE
      ----------------------------- */

      progress +=
        0.00065;

      if (progress > 1) {
        progress = 0;
      }

      routeCurve.getPointAt(
        progress,
        carPosition
      );

      routeCurve.getPointAt(
        Math.min(
          progress + 0.005,
          1
        ),
        nextPosition
      );

      carContainer.position.copy(
        carPosition
      );

      carContainer.position.y =
        0.05;

      /* -----------------------------
         ORIENTATION
      ----------------------------- */

      direction
        .subVectors(
          nextPosition,
          carPosition
        )
        .normalize();

      const angle =
        Math.atan2(
          direction.x,
          direction.z
        );

      carContainer.rotation.y =
        angle;

      /* -----------------------------
         GPS
      ----------------------------- */

      gpsGlowMaterial.opacity =
        0.02 +
        Math.sin(
          elapsed * 2.5
        ) *
          0.01;

      /* -----------------------------
         DESTINATION
      ----------------------------- */

      const destinationScale =
        1 +
        Math.sin(
          elapsed * 3
        ) *
          0.12;

      destinationRing.scale.set(
        destinationScale,
        destinationScale,
        destinationScale
      );

      /* -----------------------------
         DÉTECTION
      ----------------------------- */

      const detectionScale =
        1 +
        Math.sin(
          elapsed * 2
        ) *
          0.1;

      detectionRing.scale.set(
        detectionScale,
        detectionScale,
        detectionScale
      );

      /* -----------------------------
         PIÉTON
      ----------------------------- */

      const pedestrianScale =
        1 +
        Math.sin(
          elapsed * 4
        ) *
          0.1;

      pedestrianRing.scale.set(
        pedestrianScale,
        pedestrianScale,
        pedestrianScale
      );

      /* -----------------------------
         ÉTOILES
      ----------------------------- */

      stars.rotation.y =
        elapsed * 0.002;

      controls.update();

      composer.render();
    }

    renderer.setAnimationLoop(
      animate
    );

    /* =========================================================
       RESIZE
    ========================================================= */

    function handleResize() {
      const width =
        mountRef.current?.clientWidth ?? 0;

      const height =
        mountRef.current?.clientHeight ?? 0;

      if (
        width === 0 ||
        height === 0
      ) {
        return;
      }

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      composer.setSize(
        width,
        height
      );
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    /* =========================================================
       CLEANUP
    ========================================================= */

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      renderer.setAnimationLoop(
        null
      );

      controls.dispose();

      composer.dispose();

      renderer.dispose();

      roadGeometry.dispose();

      roadMaterial.dispose();

      asphaltTexture.dispose();

      groundGeometry.dispose();

      groundMaterial.dispose();

      grassTexture.dispose();

      gpsGeometry.dispose();

      gpsMaterial.dispose();

      gpsGlowGeometry.dispose();

      gpsGlowMaterial.dispose();

      destinationRing.geometry.dispose();

      destinationRing.material.dispose();

      destinationCore.geometry.dispose();

      destinationCore.material.dispose();

      edgeGeometry.dispose();

      edgeMaterial.dispose();

      starGeometry.dispose();

      starMaterial.dispose();

      mount.innerHTML = "";
    };
  }, [carModelUrl]);

  return (
    <div
      ref={mountRef}
      className="relative h-full w-full overflow-hidden rounded-[28px]"
    >
      {/* =====================================================
          HUD
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-10">

        {/* Sécurité */}
        <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400/10">
              <span className="text-lg">
                ⚠️
              </span>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                Sécurité
              </p>

              <p className="text-sm font-semibold text-white">
                Piéton détecté
              </p>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <div className="absolute right-5 top-5 rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 backdrop-blur-md">

          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300/60">
            Navigation
          </p>

          <p className="mt-1 text-sm font-semibold text-white">
            Itinéraire optimal
          </p>

          <div className="mt-2 flex items-center gap-2">

            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-xs text-white/50">
              GPS actif
            </span>

          </div>
        </div>

        {/* Position */}
        <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 backdrop-blur-md">

          <div className="flex items-center gap-3">

            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(37,191,255,0.6)]" />

            <span className="text-xs font-medium text-white/65">
              Position actuelle
            </span>

          </div>
        </div>

        {/* Destination */}
        <div className="absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 backdrop-blur-md">

          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            Destination
          </p>

          <p className="mt-1 text-lg font-bold text-white">
            2.4 km
          </p>

          <p className="text-xs text-cyan-300">
            ~ 6 min
          </p>

        </div>

      </div>
    </div>
  );
}