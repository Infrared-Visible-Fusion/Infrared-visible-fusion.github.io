export const datasetRows = [
  {
    key: '1',
    name: 'KAIST',
    year: 2015,
    task: ['Object Detection'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image (LWIR)'],
    links: [
      { label: 'Website', href: 'https://soonminhwang.github.io/rgbt-ped-detection/' },
      { label: 'GitHub', href: 'https://github.com/SoonminHwang/rgbt-ped-detection' },
    ],
  },
  {
    key: '2',
    name: 'FLIR ADAS v1&v2',
    year: 2018,
    task: ['Object Detection'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image (14/16-bit raw)'],
    links: [
      { label: 'Official', href: 'https://oem.flir.com/solutions/automotive/adas-dataset-form/' },
      { label: 'Kaggle', href: 'https://www.kaggle.com/datasets/samdazel/teledyne-flir-adas-thermal-dataset-v2' },
    ],
  },
  {
    key: '3',
    name: 'LLVIP',
    year: 2021,
    task: ['Object Detection'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [
      { label: 'Website', href: 'https://bupt-ai-cz.github.io/LLVIP/' },
      { label: 'GitHub', href: 'https://github.com/bupt-ai-cz/LLVIP' },
    ],
  },
  {
    key: '4',
    name: 'M3FD',
    year: 2022,
    task: ['Object Detection'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/JinyuanLiu-CV/TarDAL' }],
  },
  {
    key: '5',
    name: 'DroneVehicle',
    year: 2020,
    task: ['Object Detection'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/SunYM2020/UA-CMDet' }],
  },
  {
    key: '6',
    name: 'SMOD',
    year: 2024,
    task: ['Object Detection'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [
      { label: 'Kaggle', href: 'https://www.kaggle.com/datasets/zizhaochen6/sjtu-multispectral-object-detection-smod-dataset' },
    ],
  },
  {
    key: '7',
    name: 'PST900',
    year: 2020,
    task: ['Semantic Segmentation', 'Instance Segmentation'],
    annotation: ['2D pixel', '2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/ShreyasSkandanS/pst900_thermal_rgb' }],
  },
  {
    key: '8',
    name: 'MFNet',
    year: 2017,
    task: ['Semantic Segmentation'],
    annotation: ['2D pixel'],
    representation: ['RGB image', 'Thermal image'],
    links: [
      { label: 'Website', href: 'https://www.mi.t.u-tokyo.ac.jp/static/projects/mil_multispectral/' },
      { label: 'GitHub', href: 'https://github.com/haqishen/MFNet-pytorch' },
    ],
  },
  {
    key: '9',
    name: 'RoadScene',
    year: 2019,
    task: ['Semantic Segmentation'],
    annotation: ['2D pixel'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/hanna-xu/RoadScene' }],
  },
  {
    key: '10',
    name: 'VTUAV',
    year: 2022,
    task: ['Single-object Tracking (SOT)'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [
      { label: 'Website', href: 'https://zhang-pengyu.github.io/DUT-VTUAV/' },
      { label: 'GitHub', href: 'https://github.com/zhang-pengyu/DUT-VTUAV' },
    ],
  },
  {
    key: '11',
    name: 'GTOT',
    year: 2016,
    task: ['Single-object Tracking (SOT)'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/xingchenzhang/RGB-T-fusion-tracking-papers-and-results' }],
  },
  {
    key: '12',
    name: 'RGBT234',
    year: 2019,
    task: ['Single-object Tracking (SOT)'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/xingchenzhang/RGB-T-fusion-tracking-papers-and-results' }],
  },
  {
    key: '13',
    name: 'VT-MOT',
    year: 2024,
    task: ['Multi-object Tracking (MOT)'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/wqw123wqw/PFTrack' }],
  },
  {
    key: '14',
    name: 'VT-Tiny-MOT',
    year: 2024,
    task: ['Multi-object Tracking (MOT)'],
    annotation: ['2D box'],
    representation: ['RGB image', 'Thermal image'],
    links: [{ label: 'GitHub', href: 'https://github.com/xuqingyu26/HGTMT' }],
  },
];

export const methodRows = [
  ['1', 'Single IVIF', 'DenseFuse', 2019, ['Single IVIF (Generation)'], 'Image-level', 'RGB+IR', 'CNN', 'Feature level', 'RoadScene', 'https://github.com/hli1221/imagefusion_densefuse'],
  ['2', 'Single IVIF', 'SwinFusion', 2022, ['Single IVIF (Generation)'], 'Image-level', 'RGB+IR', 'Swin Transformer', 'Feature level', 'RoadScene', 'https://github.com/Linfeng-Tang/SwinFusion'],
  ['3', 'Single IVIF', 'DDFM', 2023, ['Single IVIF (Generation)'], 'Image-level', 'RGB+IR', 'Diffusion Model', 'Feature level', 'M3FD', 'https://github.com/Zhaozixiang1228/MMIF-DDFM'],
  ['4', 'Single IVIF', 'MambaDFuse', 2024, ['Single IVIF (Generation)'], 'Image-level', 'RGB+IR', 'Mamba', 'Feature level', 'M3FD', 'https://github.com/Lizhe1228/MambaDFuse'],
  ['5', 'Single IVIF', 'RSTFuse', 2025, ['Single IVIF (Generation)'], 'Image-level', 'RGB+IR', 'CNN + ViT', 'Feature level', 'RoadScene', ''],
  ['6', 'IVIF-based Object Detection', 'TarDAL', 2022, ['Object Detection'], '2D box', 'RGB+IR', 'End-to-End (Task-Driven)', 'Image level', 'FLIR, KAIST', 'https://github.com/JinyuanLiu-CV/TarDAL'],
  ['7', 'IVIF-based Object Detection', 'CFT', 2022, ['Object Detection'], '2D box', 'RGB+IR', 'Transformer', 'Feature level', 'KAIST', 'https://github.com/DocF/multispectral-object-detection'],
  ['8', 'IVIF-based Object Detection', 'E2E-MFD', 2024, ['Object Detection'], '2D box', 'RGB+IR', 'End-to-End (Task-Driven)', 'Image level', 'M3FD', 'https://github.com/icey-zhang/E2E-MFD-HOD'],
  ['9', 'IVIF-based Object Detection', 'Text-DFH', 2025, ['Object Detection'], '2D box', 'RGB+IR', 'LLM-Guided (LLaVA)', 'Feature level', 'LLVIP', ''],
  ['10', 'Semantic Segmentation', 'RTFNet', 2019, ['Semantic Segmentation'], '2D pixel', 'RGB+IR', 'CNN (ResNet)', 'Feature level', 'MFNet', 'https://github.com/yuxiangsun/RTFNet'],
  ['11', 'Semantic Segmentation', 'CMX', 2022, ['Semantic Segmentation'], '2D pixel', 'RGB+IR', 'Transformer (ViT/MiT)', 'Feature level', 'MFNet', 'https://github.com/huaaaliu/RGBX_Semantic_Segmentation'],
  ['12', 'Semantic Segmentation', 'FusionSAM', 2024, ['Semantic Segmentation'], '2D pixel', 'RGB+IR', 'Foundation Model (SAM)', 'Prompt level', 'MFNet', ''],
  ['13', 'Semantic Segmentation', 'OpenRSS', 2025, ['Semantic Segmentation'], '2D pixel', 'RGB+IR', 'Open-Vocabulary', 'Zero-Shot', 'MFNet', 'https://github.com/SXDR/OpenRSS'],
  ['14', 'Instance Segmentation', 'YOLACTFusion', 2023, ['Instance Segmentation'], '2D pixel', 'RGB+NIR', 'Single-Stage CNN', 'Feature level', 'Agri-Data', ''],
  ['15', 'Instance Segmentation', 'MSIS', 2022, ['Instance Segmentation'], '2D pixel', 'RGB+IR', 'SOLOv2 based', 'Feature level', 'Power-Data', ''],
  ['16', 'Single-object Tracking (SOT)', 'SiamCDA', 2022, ['Single-object Tracking'], '2D box', 'RGB+IR', 'Siamese Network', 'Feature level', 'RGBT234', ''],
  ['17', 'Single-object Tracking (SOT)', 'USTrack', 2024, ['Single-object Tracking'], '2D box', 'RGB+IR', 'Unified ViT', 'Single Stream', 'RGBT234', 'https://github.com/xiajianqiang/USTrack'],
  ['18', 'Single-object Tracking (SOT)', 'SUTrack', 2024, ['Single-object Tracking'], '2D box', 'RGB+IR', 'Prompt Framework', 'Single Stream', 'RGBT234', ''],
  ['19', 'Multi-object Tracking (MOT)', 'PFTrack', 2024, ['Multi-object Tracking'], '2D box', 'RGB+IR', 'Progressive Fusion', 'Feature level', 'VT-MOT', 'https://github.com/wqw123wqw/PFTrack'],
  ['20', 'Multi-object Tracking (MOT)', 'HGT-Track', 2024, ['Multi-object Tracking'], '2D box', 'RGB+IR', 'Heterogeneous Graph', 'Graph level', 'VT-MOT', 'https://github.com/xuqingyu26/HGTMT'],
  ['21', 'Multi-object Tracking (MOT)', 'MCTrack', 2025, ['Multi-object Tracking'], '2D box', 'RGB+IR', 'Bidirectional Modality Interaction', 'Feature level', 'VT-MOT', ''],
].map(([key, category, shortName, year, task, annotation, modalities, architecture, fusionLevel, dataset, codeLink]) => ({
  key,
  category,
  shortName,
  year,
  task,
  annotation,
  modalities,
  architecture,
  fusionLevel,
  dataset,
  codeLink,
}));

export const citationLines = [
  '@article{YourLastName2025IVIF,',
  '  author={Author1 and Author2 and Author3},',
  '  journal={IEEE Transactions on Intelligent Vehicles (Or your target journal)},',
  '  title={A Comprehensive Review of Infrared and Visible Image Fusion in Autonomous Driving: Tasks, Methods, and Challenges},',
  '  year={2025},',
  '  volume={1},',
  '  number={1},',
  '  pages={1-20},',
  '  doi={10.1109/TIV.2025.xxxxxxx}',
  '}',
];

export const topicIndex = [
  {
    title: 'Single IVIF',
    items: [
      '2025 - RSTFuse: Resolution-Switchable Transformer for Image Fusion',
      '2024 - MambaDFuse: A Mamba-based Dual-Phase Model for Multi-Modality Image Fusion',
      '2023 - DDFM: Denoising Diffusion Models for Plug-and-Play Image Fusion',
      '2022 - SwinFusion: Cross-domain Long-range Learning for General Image Fusion via Swin Transformer',
      '2019 - DenseFuse: A Fusion Approach to Infrared and Visible Images',
    ],
  },
  {
    title: 'IVIF-based Object Detection',
    items: [
      '2025 - Text-DFH: Language-Guided Target-Aware Feature Harmonization for Visible-Infrared Object Detection',
      '2024 - E2E-MFD: Towards End-to-End Synchronous Optimization for Multispectral Pedestrian Detection',
      '2022 - TarDAL: Target-Aware Dual Adversarial Learning and a Cooperative Framework for Image Fusion and Detection',
      '2022 - CFT: Cross-Modal Feature Transformer for Multispectral Object Detection',
    ],
  },
  {
    title: 'Semantic Segmentation',
    items: [
      '2025 - OpenRSS: Open-Vocabulary RGB-Thermal Semantic Segmentation',
      '2024 - FusionSAM: Adapting Segment Anything Model for Multispectral Semantic Segmentation',
      '2022 - CMX: Cross-Modal Fusion for RGB-X Semantic Segmentation with Transformers',
      '2019 - RTFNet: RGB-Thermal Fusion Network for Semantic Segmentation of Urban Scenes',
    ],
  },
  {
    title: 'Instance Segmentation',
    items: [
      '2023 - YOLACTFusion: An Instance Segmentation Model for Greenhouse Tomato Stems',
      '2022 - MSIS: Multispectral Single-Stage Instance Segmentation for Power Equipment',
    ],
  },
  {
    title: 'Tracking',
    items: [
      '2024 - SUTrack: A Unified Framework for Various Single Object Tracking Tasks',
      '2024 - USTrack: Unified Spatial-Temporal Framework for RGB-T Tracking',
      '2022 - SiamCDA: Complementarity-Aware and Distractor-Aware Siamese Network for RGB-T Tracking',
      '2025 - MCTrack: Multi-modal Cross-Track for RGB-T Multi-Object Tracking',
      '2024 - HGT-Track: Heterogeneous Graph Transformer for Multi-Object Tracking',
      '2024 - PFTrack: Progressive Fusion for RGB-T Multi-Object Tracking',
    ],
  },
];

function formatMethodReference(item) {
  const matched = item.match(/^(\d{4}) - ([^:]+): (.+)$/);
  if (!matched) {
    return {
      label: item,
      text: item,
    };
  }

  const [, year, shortName, title] = matched;
  return {
    label: `${shortName} (${year})`,
    text: `${shortName}. ${year}. ${title}.`,
  };
}

export const referenceSections = [
  {
    title: 'Datasets',
    items: datasetRows.map((row) => ({
      label: `${row.name} (${row.year})`,
      text: `${row.name}. ${row.year}. Tasks: ${row.task.join(', ')}. Annotation: ${row.annotation.join(', ')}. Sensor data: ${row.representation.join('; ')}.`,
    })),
  },
  ...topicIndex.map((group) => ({
    title: group.title,
    items: group.items.map(formatMethodReference),
  })),
];
