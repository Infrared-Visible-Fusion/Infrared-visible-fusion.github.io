# Awesome-IVIF-AD
<p>
  <img src="image/cover.png" width="48%" />
  <img src="image/cover2.png" width="48%" />
</p>


## Overview
- [Datasets](#datasets)
- [Methods](#methods)
- [Single IVIF (Image Generation)](#single-ivif)
- [IVIF-based Object Detection](#ivif-based-object-detection)
- [IVIF-based Segmentation](#ivif-based-segmentation)
  - [Semantic Segmentation](#semantic-segmentation)
  - [Instance Segmentation](#instance-segmentation)
- [IVIF-based Tracking](#ivif-based-tracking)
  - [Single-object Tracking (SOT)](#single-object-tracking-sot)
  - [Multi-object Tracking (MOT)](#multi-object-tracking-mot)
- [Citation](#citation)

## Datasets
| Id | Name             | Year | Task                                                                                                      | Annotation               | Sensor Data Representation                                   | Link                                                         |
|----|------------------|------|-----------------------------------------------------------------------------------------------------------|--------------------------|-------------------------------------------------------------|--------------------------------------------------------------|
| 1  | KAIST            | 2015 | Object Detection                                                                                          | 2D box                   | Camera: RGB image; Camera: Thermal image (LWIR)             | [Website](https://soonminhwang.github.io/rgbt-ped-detection/) \| [GitHub](https://github.com/SoonminHwang/rgbt-ped-detection) |
| 2  | FLIR ADAS v1&v2  | 2018 | Object Detection                                                                                          | 2D box                   | Camera: RGB image; Camera: Thermal image (14/16-bit raw)    | [Official](https://oem.flir.com/solutions/automotive/adas-dataset-form/) \| [Kaggle](https://www.kaggle.com/datasets/samdazel/teledyne-flir-adas-thermal-dataset-v2) |
| 3  | LLVIP            | 2021 | Object Detection                                                                                          | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [Website](https://bupt-ai-cz.github.io/LLVIP/) \| [GitHub](https://github.com/bupt-ai-cz/LLVIP) |
| 4  | M3FD             | 2022 | Object Detection                                                                                          | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/JinyuanLiu-CV/TarDAL) |
| 5  | DroneVehicle     | 2020 | Object Detection                                                                                          | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/SunYM2020/UA-CMDet) |
| 6  | SMOD             | 2024 | Object Detection                                                                                          | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [Kaggle](https://www.kaggle.com/datasets/zizhaochen6/sjtu-multispectral-object-detection-smod-dataset) |
| 7  | PST900           | 2020 | Semantic Segmentation<br>Instance Segmentation                                                            | 2D pixel<br>2D box       | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/ShreyasSkandanS/pst900_thermal_rgb) |
| 8  | MFNet            | 2017 | Semantic Segmentation                                                                                     | 2D pixel                 | Camera: RGB image; Camera: Thermal image                    |[Website](https://www.mi.t.u-tokyo.ac.jp/static/projects/mil_multispectral/) \| [GitHub](https://github.com/haqishen/MFNet-pytorch) |
| 9  | RoadScene        | 2019 | Semantic Segmentation                                                                                     | 2D pixel                 | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/hanna-xu/RoadScene) |
| 10 | VTUAV            | 2022 | Single-object Tracking (SOT)                                                                              | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [Website](https://zhang-pengyu.github.io/DUT-VTUAV/) \| [GitHub](https://github.com/zhang-pengyu/DUT-VTUAV) |
| 11 | GTOT             | 2016 | Single-object Tracking (SOT)                                                                              | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/xingchenzhang/RGB-T-fusion-tracking-papers-and-results) |
| 12 | RGBT234          | 2019 | Single-object Tracking (SOT)                                                                              | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/xingchenzhang/RGB-T-fusion-tracking-papers-and-results) |
| 13 | VT-MOT           | 2024 | Multi-object Tracking (MOT)                                                                               | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/wqw123wqw/PFTrack) |
| 14 | VT-Tiny-MOT      | 2024 | Multi-object Tracking (MOT)                                                                               | 2D box                   | Camera: RGB image; Camera: Thermal image                    | [GitHub](https://github.com/xuqingyu26/HGTMT) |

## Methods
| Id | Short Name       | Year | Task                                      | Annotation | Modalities | Network Architecture | Fusion Level  | Target Dataset | Source Code |
|----|------------------|------|-------------------------------------------|------------|------------|----------------------|---------------|---------|-------------|
| 1  | DenseFuse        | 2019 | Single IVIF (Generation)                  | Image-level| RGB+IR     | CNN                  | Feature level | RoadScene | [Code](https://github.com/hli1221/imagefusion_densefuse) |
| 2  | SwinFusion       | 2022 | Single IVIF (Generation)                  | Image-level| RGB+IR     | Swin Transformer     | Feature level | RoadScene | [Code](https://github.com/Linfeng-Tang/SwinFusion) |
| 3  | DDFM             | 2023 | Single IVIF (Generation)                  | Image-level| RGB+IR     | Diffusion Model      | Feature level | M3FD    | [Code](https://github.com/Zhaozixiang1228/MMIF-DDFM) |
| 4  | MambaDFuse       | 2024 | Single IVIF (Generation)                  | Image-level| RGB+IR     | Mamba                | Feature level | M3FD    | [Code](https://github.com/Lizhe1228/MambaDFuse) |
| 5  | RSTFuse          | 2025 | Single IVIF (Generation)                  | Image-level| RGB+IR     | CNN + ViT            | Feature level | RoadScene |  #|
| 6  | TarDAL           | 2022 | Object Detection                          | 2D box     | RGB+IR     | End-to-End (Task-Driven)| Image level | FLIR, KAIST | [Code](https://github.com/JinyuanLiu-CV/TarDAL) |
| 7  | CFT              | 2022 | Object Detection                          | 2D box     | RGB+IR     | Transformer          | Feature level | KAIST   | [Code](https://github.com/DocF/multispectral-object-detection) |
| 8  | E2E-MFD          | 2024 | Object Detection                          | 2D box     | RGB+IR     | End-to-End (Task-Driven)| Image level | M3FD    | [Code](https://github.com/icey-zhang/E2E-MFD-HOD) |
| 9  | Text-DFH         | 2025 | Object Detection                          | 2D box     | RGB+IR     | LLM-Guided (LLaVA)   | Feature level | LLVIP   |    # |
| 10 | RTFNet           | 2019 | Semantic Segmentation                     | 2D pixel   | RGB+IR     | CNN (ResNet)         | Feature level | MFNet   | [Code](https://github.com/yuxiangsun/RTFNet) |
| 11 | CMX              | 2022 | Semantic Segmentation                     | 2D pixel   | RGB+IR     | Transformer (ViT/MiT)| Feature level | MFNet   | [Code](https://github.com/huaaaliu/RGBX_Semantic_Segmentation) |
| 12 | FusionSAM        | 2024 | Semantic Segmentation                     | 2D pixel   | RGB+IR     | Foundation Model (SAM) | Prompt level | MFNet   |   #|
| 13 | OpenRSS          | 2025 | Semantic Segmentation                     | 2D pixel   | RGB+IR     | Open-Vocabulary      | Zero-Shot    | MFNet   | [Code](https://github.com/SXDR/OpenRSS) |
| 14 | YOLACTFusion     | 2023 | Instance Segmentation                     | 2D pixel   | RGB+NIR    | Single-Stage CNN     | Feature level | Agri-Data |  #|
| 15 | MSIS             | 2022 | Instance Segmentation                     | 2D pixel   | RGB+IR     | SOLOv2 based         | Feature level | Power-Data |  #|
| 16 | SiamCDA          | 2022 | Single-object Tracking                    | 2D box     | RGB+IR     | Siamese Network      | Feature level | RGBT234 |  #|
| 17 | USTrack          | 2024 | Single-object Tracking                    | 2D box     | RGB+IR     | Unified ViT          | Single Stream | RGBT234 | [Code](https://github.com/xiajianqiang/USTrack) |
| 18 | SUTrack          | 2024 | Single-object Tracking                    | 2D box     | RGB+IR     | Prompt Framework     | Single Stream | RGBT234 |  #|
| 19 | PFTrack          | 2024 | Multi-object Tracking                     | 2D box     | RGB+IR     | Progressive Fusion   | Feature level | VT-MOT  | [Code](https://github.com/wqw123wqw/PFTrack) |
| 20 | HGT-Track        | 2024 | Multi-object Tracking                     | 2D box     | RGB+IR     | Heterogeneous Graph  | Graph level   | VT-MOT  | [Code](https://github.com/xuqingyu26/HGTMT) |
| 21 | MCTrack          | 2025 | Multi-object Tracking                     | 2D box     | RGB+IR     | Bidirectional Modality Interaction | Feature level | VT-MOT |  #|

*(Note: The `#` in the Code column indicates that the official source code for that particular paper has not yet been publicly released by the authors or requires contacting them directly.)*

## Single IVIF 

* 2025 - **RSTFuse**: Resolution-Switchable Transformer for Image Fusion
* 2024 - **MambaDFuse**: A Mamba-based Dual-Phase Model for Multi-Modality Image Fusion [[Code](https://github.com/Lizhe1228/MambaDFuse)]
* 2023 - **DDFM**: Denoising Diffusion Models for Plug-and-Play Image Fusion [[Code](https://github.com/Zhaozixiang1228/MMIF-DDFM)]
* 2022 - **SwinFusion**: Cross-domain Long-range Learning for General Image Fusion via Swin Transformer [[Code](https://github.com/Linfeng-Tang/SwinFusion)]
* 2019 - **DenseFuse**: A Fusion Approach to Infrared and Visible Images [[Code](https://github.com/hli1221/imagefusion_densefuse)]

## IVIF-based Object Detection

* 2025 - **Text-DFH**: Language-Guided Target-Aware Feature Harmonization for Visible-Infrared Object Detection
* 2024 - **E2E-MFD**: Towards End-to-End Synchronous Optimization for Multispectral Pedestrian Detection [[Code](https://github.com/icey-zhang/E2E-MFD-HOD)]
* 2022 - **TarDAL**: Target-Aware Dual Adversarial Learning and a Cooperative Framework for Image Fusion and Detection [[Code](https://github.com/JinyuanLiu-CV/TarDAL)]
* 2022 - **CFT**: Cross-Modal Feature Transformer for Multispectral Object Detection [[Code](https://github.com/DocF/multispectral-object-detection)]

## IVIF-based Segmentation

### Semantic Segmentation
* 2025 - **OpenRSS**: Open-Vocabulary RGB-Thermal Semantic Segmentation [[Code](https://github.com/SXDR/OpenRSS)]
* 2024 - **FusionSAM**: Adapting Segment Anything Model for Multispectral Semantic Segmentation
* 2022 - **CMX**: Cross-Modal Fusion for RGB-X Semantic Segmentation with Transformers [[Code](https://github.com/huaaaliu/RGBX_Semantic_Segmentation)]
* 2019 - **RTFNet**: RGB-Thermal Fusion Network for Semantic Segmentation of Urban Scenes [[Code](https://github.com/yuxiangsun/RTFNet)]

### Instance Segmentation
* 2023 - **YOLACTFusion**: An Instance Segmentation Model for Greenhouse Tomato Stems
* 2022 - **MSIS**: Multispectral Single-Stage Instance Segmentation for Power Equipment

## IVIF-based Tracking

### Single-object Tracking (SOT)
* 2024 - **SUTrack**: A Unified Framework for Various Single Object Tracking Tasks
* 2024 - **USTrack**: Unified Spatial-Temporal Framework for RGB-T Tracking [[Code](https://github.com/xiajianqiang/USTrack)]
* 2022 - **SiamCDA**: Complementarity-Aware and Distractor-Aware Siamese Network for RGB-T Tracking

### Multi-object Tracking (MOT)
* 2025 - **MCTrack**: Multi-modal Cross-Track for RGB-T Multi-Object Tracking
* 2024 - **HGT-Track**: Heterogeneous Graph Transformer for Multi-Object Tracking [[Code](https://github.com/xuqingyu26/HGTMT)]
* 2024 - **PFTrack**: Progressive Fusion for RGB-T Multi-Object Tracking [[Code](https://github.com/wqw123wqw/PFTrack)]
## Citation
Please use the following citation when referencing:
```bibtex
@article{YourLastName2025IVIF,
  author={Author1 and Author2 and Author3},
  journal={IEEE Transactions on Intelligent Vehicles (Or your target journal)}, 
  title={A Comprehensive Review of Infrared and Visible Image Fusion in Autonomous Driving: Tasks, Methods, and Challenges}, 
  year={2025},
  volume={1},
  number={1},
  pages={1-20},
  doi={10.1109/TIV.2025.xxxxxxx}
}
