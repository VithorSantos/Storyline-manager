/* Dicionário do Assistente de Prompt (editável).
   - colors:  palavras de cor (ex.: "white hair" x "brown hair" = possivelmente repetido)
   - aliases: apelidos, "tag": "tag equivalente"
   - groups:  grupos de tags que se excluem, "nome do grupo": ["tag a", "tag b", ...]
   - pairs (opcional): pares extras que quase nunca aparecem juntos, [["tag a", "tag b"], ...]
   É um arquivo .js (e não .json) para funcionar também ao abrir o index.html direto do disco,
   onde o navegador bloqueia a leitura de .json. Edite só o que está entre as chaves { }. */
window.SM_DICT = {
 "colors": [
  "white",
  "black",
  "brown",
  "blue",
  "red",
  "green",
  "yellow",
  "orange",
  "pink",
  "purple",
  "grey",
  "gray",
  "silver",
  "gold",
  "golden",
  "blonde",
  "aqua",
  "cyan",
  "teal",
  "beige",
  "tan",
  "violet",
  "lavender",
  "magenta",
  "turquoise",
  "navy",
  "maroon",
  "crimson",
  "indigo",
  "coral",
  "bronze",
  "copper",
  "emerald",
  "scarlet",
  "amber",
  "ivory",
  "lime",
  "olive",
  "peach",
  "lilac",
  "burgundy",
  "charcoal"
 ],
 "aliases": {
  "blond hair": "blonde hair",
  "yellow hair": "blonde hair",
  "gray hair": "grey hair",
  "twin tails": "twintails",
  "twintail": "twintails",
  "twin tail": "twintails",
  "pony tail": "ponytail",
  "1 girl": "1girl",
  "one girl": "1girl",
  "2 girls": "2girls",
  "1 boy": "1boy",
  "thigh highs": "thighhighs",
  "thigh-highs": "thighhighs",
  "knee highs": "kneehighs",
  "looking at the viewer": "looking at viewer",
  "look at viewer": "looking at viewer",
  "eyes closed": "closed eyes",
  "smiling": "smile",
  "smiles": "smile",
  "cry": "crying",
  "sitting down": "sitting",
  "stand": "standing",
  "lying down": "lying",
  "full-body": "full body",
  "closeup": "close-up",
  "close up": "close-up",
  "upper-body": "upper body",
  "from the front": "from front",
  "front view": "from front",
  "back view": "from behind",
  "side view": "from side",
  "top view": "from above",
  "high angle": "from above",
  "low angle": "from below",
  "night time": "night",
  "nighttime": "night",
  "daytime": "day",
  "grayscale": "greyscale",
  "black and white": "monochrome",
  "naked": "nude",
  "bare foot": "barefoot",
  "ginger hair": "orange hair",
  "pigtails": "twintails",
  "bobcut": "bob cut",
  "updo": "hair up",
  "loose hair": "hair down",
  "bald head": "bald",
  "shaved head": "bald",
  "looking at camera": "looking at viewer",
  "looking to the viewer": "looking at viewer",
  "eye contact": "looking at viewer",
  "mad": "angry",
  "no expression": "expressionless",
  "blank expression": "expressionless",
  "tearing up": "crying",
  "legs crossed": "crossed legs",
  "arms crossed": "crossed arms",
  "crossed arm": "crossed arms",
  "cowboy-shot": "cowboy shot",
  "headshot": "portrait",
  "head shot": "portrait",
  "barefeet": "barefoot",
  "no shoes": "barefoot",
  "indoor": "indoors",
  "outdoor": "outdoors",
  "inside": "indoors",
  "outside": "outdoors",
  "snowing": "snow",
  "snowy": "snow",
  "raining": "rain",
  "rainy": "rain",
  "foggy": "fog",
  "misty": "fog",
  "sunny day": "sunny",
  "sleeve less": "sleeveless",
  "short sleeve": "short sleeves",
  "long sleeve": "long sleeves",
  "mini skirt": "miniskirt",
  "muscle": "muscular",
  "plump": "chubby",
  "flat-chested": "flat chest",
  "night sky": "night",
  "moon light": "moonlight"
 },
 "groups": {
  "hair_length": [
   "bald",
   "very short hair",
   "short hair",
   "medium hair",
   "long hair",
   "very long hair",
   "absurdly long hair"
  ],
  "hair_style": [
   "twintails",
   "ponytail",
   "hair down",
   "hair up",
   "bob cut",
   "side ponytail"
  ],
  "girls_count": [
   "1girl",
   "2girls",
   "3girls",
   "4girls",
   "5girls",
   "6+girls",
   "multiple girls",
   "no humans"
  ],
  "boys_count": [
   "1boy",
   "2boys",
   "3boys",
   "multiple boys",
   "no humans"
  ],
  "solo_vs_group": [
   "solo",
   "2girls",
   "3girls",
   "4girls",
   "5girls",
   "6+girls",
   "multiple girls",
   "2boys",
   "3boys",
   "multiple boys",
   "crowd"
  ],
  "eye_state": [
   "closed eyes",
   "open eyes",
   "half-closed eyes",
   "wide-eyed",
   "one eye closed"
  ],
  "mouth": [
   "open mouth",
   "closed mouth"
  ],
  "expression": [
   "smile",
   "crying",
   "angry",
   "sad",
   "expressionless",
   "frown"
  ],
  "view_angle": [
   "from front",
   "from behind",
   "from side",
   "from above",
   "from below"
  ],
  "gaze": [
   "looking at viewer",
   "looking away",
   "looking back",
   "looking down",
   "looking up",
   "looking to the side"
  ],
  "shot": [
   "close-up",
   "portrait",
   "upper body",
   "cowboy shot",
   "full body",
   "wide shot",
   "extreme close-up"
  ],
  "pose": [
   "standing",
   "sitting",
   "lying",
   "kneeling",
   "crouching",
   "squatting",
   "walking",
   "running",
   "jumping"
  ],
  "time_of_day": [
   "day",
   "night",
   "sunset",
   "sunrise",
   "dusk",
   "dawn",
   "morning",
   "afternoon",
   "midnight",
   "noon"
  ],
  "place": [
   "indoors",
   "outdoors"
  ],
  "weather": [
   "sunny",
   "rain",
   "snow",
   "fog"
  ],
  "season": [
   "spring",
   "summer",
   "autumn",
   "winter"
  ],
  "background": [
   "simple background",
   "detailed background"
  ],
  "colorness": [
   "monochrome",
   "greyscale",
   "colorful"
  ],
  "style": [
   "realistic",
   "photorealistic",
   "anime",
   "cartoon",
   "flat color",
   "3d"
  ],
  "chest_size": [
   "flat chest",
   "small breasts",
   "medium breasts",
   "large breasts",
   "huge breasts",
   "gigantic breasts"
  ],
  "build": [
   "slim",
   "curvy",
   "muscular",
   "chubby",
   "fat"
  ],
  "skin": [
   "pale skin",
   "dark skin",
   "tan"
  ],
  "clothing_state": [
   "nude",
   "clothed"
  ],
  "sleeves": [
   "long sleeves",
   "short sleeves",
   "sleeveless"
  ],
  "legwear": [
   "bare legs",
   "pantyhose",
   "thighhighs"
  ],
  "footwear": [
   "barefoot",
   "shoes",
   "boots",
   "sandals",
   "sneakers",
   "high heels"
  ],
  "hair_texture": [
   "straight hair",
   "wavy hair",
   "curly hair"
  ],
  "facing": [
   "facing viewer",
   "facing away",
   "facing to the side"
  ],
  "arms": [
   "arms up",
   "arms down",
   "arms behind back",
   "crossed arms",
   "arms at sides"
  ],
  "dress_length": [
   "short dress",
   "long dress",
   "mini dress",
   "maxi dress"
  ],
  "skirt_length": [
   "miniskirt",
   "short skirt",
   "long skirt"
  ],
  "lean": [
   "leaning forward",
   "leaning back"
  ],
  "legs": [
   "legs together",
   "legs apart",
   "crossed legs"
  ],
  "glasses": [
   "glasses",
   "sunglasses",
   "no glasses"
  ],
  "bangs": [
   "blunt bangs",
   "swept bangs",
   "parted bangs",
   "asymmetrical bangs"
  ]
 }
};
