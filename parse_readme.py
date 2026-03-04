import json
import re
import os

def parse_markdown_table(filepath):
    # 读取 README 文件
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    data = []
    in_methods_table = False

    for line in lines:
        # 定位到 Methods 表格
        if line.startswith('## Methods'):
            in_methods_table = True
            continue
        elif in_methods_table and line.startswith('##'): 
            # 遇到下一个大标题，结束读取
            break

        # 解析表格行 (跳过表头和分割线)
        if in_methods_table and line.startswith('|') and not line.startswith('|----') and not line.startswith('| Id'):
            cols = [col.strip() for col in line.split('|')[1:-1]]
            
            if len(cols) >= 10:
                code_col = cols[9]
                code_link = ""
                # 使用正则提取 [Code](url) 里面的网址
                match = re.search(r'\[.*?\]\((.*?)\)', code_col)
                if match:
                    code_link = match.group(1)

                # 组装成 JSON 需要的字典格式
                item = {
                    "key": cols[0],
                    "shortName": cols[1],
                    "year": int(cols[2]) if cols[2].isdigit() else cols[2],
                    "task": cols[3],
                    "architecture": cols[6],
                    "dataset": cols[8],
                    "codeLink": code_link if code_link else None
                }
                data.append(item)

    # 将提取的数据保存到 src/data.json 中，供前端读取
    output_path = os.path.join('src', 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"成功提取了 {len(data)} 篇论文，已保存至 src/data.json！")

# 运行提取脚本
parse_markdown_table('README.md')