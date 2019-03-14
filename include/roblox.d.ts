/// <reference no-default-lib="true"/>
/// <reference path="es.d.ts" />
/// <reference path="lua.d.ts" />
/// <reference path="manual.d.ts" />
/// <reference path="macro_math.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// ROBLOX API

interface Indexable<T extends RbxInstance> {
	[i: string]: Instance;
}

type FunctionArguments<T> = T extends (...args: infer U) => void ? U : never;

type Callback = (...args: Array<any>) => void;

interface Base<T extends string> {
	readonly ClassName: T;
}
type BaseType<T> = T extends Base<infer U> ? U : never;

/**
 * RBXScriptConnection, also known as a Connection,
 * is a special object returned by the Connect method of an Event (RBXScriptSignal).
 * This is used primarily to disconnect a listener from an Event.
 */
interface RBXScriptConnection {
	/** Disconnects the connection from the event. */
	Disconnect(): void;
	/**
	 * Describes whether or not the connection is still alive.
	 * This will become false if connection:Disconnect() is called.
	 */
	Connected: boolean;
}

/**
 * RBXScriptSignal, more commonly known as an Event, is a special kind of Roblox object.
 * It provides a way for user-defined functions, called listeners, to be called when something happens in the game.
 * When a certain event happens, the Event is fired, calling any listeners that are connected to the Event.
 * An Event may also pass arguments to each listener, to provide extra information about the event that occurred.
 */
interface RBXScriptSignal<T = Function, P = false> {
	/**
	 * Establishes a function to be called whenever the event is raised.
	 * Returns a RBXScriptConnection object associated with the connection.
	 * @param callback The function to be called whenever the event is fired.
	 */
	Connect<O extends Array<unknown> = FunctionArguments<T>>(
		callback: P extends true ? (FunctionArguments<T> extends Array<unknown> ? (...args: O) => void : T) : T,
	): RBXScriptConnection;

	/**
	 * Yields the current thread until this signal is fired. Returns what was fired to the signal.
	 */
	Wait(): FunctionArguments<T>;
}

// generated in generated_classes.d.ts
interface Instances {}
interface CreatableInstances {}

// InstanceConstructor
interface InstanceConstructor {
	/**
	 * Creates an new object of type val. The parent argument is optional;
	 * If it is supplied, the object will be parented to that object.
	 * Performance note: When the Parent of an object is set,
	 * Roblox begins listening to a variety of different property changes for replication,
	 * rendering and physics.
	 * Therefore, it is recommended to set the Parent property last when creating new objects.
	 * As such, you should avoid using the second argument (parent) of this function.
	 * You can read [this thread on the developer forum](https://devforum.roblox.com/t/psa-dont-use-instance-new-with-parent-argument/30296) for more information.
	 */
	new <T extends keyof CreatableInstances>(className: T, parent?: Instance): CreatableInstances[T];
	/**
	 * Creates an new object of type val. The parent argument is optional;
	 * If it is supplied, the object will be parented to that object.
	 * Performance note: When the Parent of an object is set,
	 * Roblox begins listening to a variety of different property changes for replication,
	 * rendering and physics.
	 * Therefore, it is recommended to set the Parent property last when creating new objects.
	 * As such, you should avoid using the second argument (parent) of this function.
	 * You can read [this thread on the developer forum](https://devforum.roblox.com/t/psa-dont-use-instance-new-with-parent-argument/30296) for more information.
	 */
	new (className: string, parent?: Instance): Instance;
}

declare const Instance: InstanceConstructor;

/**
 * Axes is a datatype used for the ArcHandles class to control what rotation axes are currently enabled.
 */
interface Axes {
	/** Whether the X axis is enabled */
	readonly X: boolean;
	/** Whether the Y axis is enabled */
	readonly Y: boolean;
	/** Whether the Z axis is enabled */
	readonly Z: boolean;
	/** Whether the top face is included */
	readonly Top: boolean;
	/** Whether the bottom face is included */
	readonly Bottom: boolean;
	/** Whether the left face is included */
	readonly Left: boolean;
	/** Whether the right face is included */
	readonly Right: boolean;
	/** Whether the back face is included */
	readonly Back: boolean;
	/** Whether the front face is included */
	readonly Front: boolean;
}
interface AxesConstructor {
	/**
	 * Creates a new Axes using list of axes and/or faces. NormalIds (faces) are converted to the corresponding axes.
	 */
	new (...axes: Array<Enum.Axis | Enum.NormalId>): Axes;
}
declare const Axes: AxesConstructor;

interface BrickColor<
	Num extends number = number,
	Name extends string = string,
	r extends number = number,
	g extends number = number,
	b extends number = number
> {
	/** The unique number that identifies the BrickColor */
	readonly Number: Num;
	/** The name associated with the BrickColor */
	readonly Name: Name;
	/** The Color3 associated with the BrickColor */
	readonly Color: Color3<r, g, b>;
	/** The red component (between 0 and 1) */
	readonly r: r;
	/** The green component (between 0 and 1) */
	readonly g: g;
	/** The blue component (between 0 and 1) */
	readonly b: b;
}

interface Color3<r extends number = number, g extends number = number, b extends number = number> {
	/** The red component (between 0 and 1) */
	readonly r: r;
	/** The green component (between 0 and 1) */
	readonly g: g;
	/** The blue component (between 0 and 1) */
	readonly b: b;
	Lerp(goal: Color3, alpha: number): Color3;
}

interface BrickColors {
	0: BrickColor<141, "Earth green", 0.15294118225574493, 0.27450981736183164, 0.17647059261798859>;
	1: BrickColor<301, "Slime green", 0.3137255012989044, 0.4274510145187378, 0.3294117748737335>;
	2: BrickColor<107, "Bright bluish green", 0, 0.56078433990478515, 0.6117647290229797>;
	3: BrickColor<26, "Black", 0.10588236153125763, 0.16470588743686675, 0.20784315466880799>;
	4: BrickColor<1012, "Deep blue", 0.12941177189350129, 0.3294117748737335, 0.7254902124404907>;
	5: BrickColor<303, "Dark blue", 0, 0.062745101749897, 0.6901960968971252>;
	6: BrickColor<1011, "Navy blue", 0, 0.125490203499794, 0.376470625400543187>;
	7: BrickColor<304, "Parsley green", 0.1725490242242813, 0.3960784673690796, 0.113725498318672178>;
	8: BrickColor<28, "Dark green", 0.1568627506494522, 0.4980392456054687228, 0.278431385755538913>;
	9: BrickColor<1018, "Teal", 0.07058823853731155, 0.93333339691162109, 0.8313726186752319>;
	10: BrickColor<302, "Smoky grey", 0.35686275362968443, 0.364705890417098976, 0.4117647409439087>;
	11: BrickColor<305, "Steel blue", 0.32156863808631898, 0.4862745404243469, 0.68235296010971065>;
	12: BrickColor<306, "Storm blue", 0.20000001788139342, 0.3450980484485626, 0.50980395078659059>;
	13: BrickColor<307, "Lapis", 0.062745101749897, 0.16470588743686675, 0.8627451658248901>;
	14: BrickColor<308, "Dark indigo", 0.23921570181846619, 0.08235294371843338, 0.5215686559677124>;
	15: BrickColor<1021, "Camo", 0.22745099663734435, 0.490196108818054178, 0.08235294371843338>;
	16: BrickColor<309, "Sea green", 0.203921586275100697, 0.556862771511077826, 0.250980406999587985>;
	17: BrickColor<310, "Shamrock", 0.35686275362968443, 0.60392159223556517, 0.2980392277240753>;
	18: BrickColor<1019, "Toothpaste", 0, 1, 1>;
	19: BrickColor<135, "Sand blue", 0.4549019932746887, 0.52549022436141965, 0.615686297416687>;
	20: BrickColor<102, "Medium blue", 0.43137258291244507, 0.6000000238418579, 0.79215693473815917>;
	21: BrickColor<23, "Bright blue", 0.050980396568775176, 0.4117647409439087, 0.67450982332229609>;
	22: BrickColor<1010, "Really blue", 0, 0, 1>;
	23: BrickColor<312, "Mulberry", 0.34901961684226988, 0.133333340287208548, 0.34901961684226988>;
	24: BrickColor<313, "Forest green", 0.12156863510608673, 0.501960813999176, 0.113725498318672178>;
	25: BrickColor<37, "Bright green", 0.29411765933036805, 0.5921568870544434, 0.29411765933036805>;
	26: BrickColor<1022, "Grime", 0.4980392456054687228, 0.556862771511077826, 0.3921568989753723>;
	27: BrickColor<1020, "Lime green", 0, 1, 0>;
	28: BrickColor<1027, "Pastel blue-green", 0.62352943420410158, 0.9529412388801575, 0.9137255549430847>;
	29: BrickColor<311, "Fossil", 0.62352943420410158, 0.63137257099151609, 0.67450982332229609>;
	30: BrickColor<315, "Electric blue", 0.03529411926865578, 0.5372549295425415, 0.81176477670669555>;
	31: BrickColor<1023, "Lavender", 0.54901963472366328, 0.35686275362968443, 0.62352943420410158>;
	32: BrickColor<1031, "Royal purple", 0.38431376218795778, 0.14509804546833039, 0.8196079134941101>;
	33: BrickColor<316, "Eggplant", 0.48235297203063963, 0, 0.48235297203063963>;
	34: BrickColor<151, "Sand green", 0.4705882668495178, 0.5647059082984924, 0.50980395078659059>;
	35: BrickColor<317, "Moss", 0.4862745404243469, 0.6117647290229797, 0.41960787773132325>;
	36: BrickColor<318, "Artichoke", 0.54117649793624873, 0.670588254928588817, 0.5215686559677124>;
	37: BrickColor<319, "Sage green", 0.7254902124404907, 0.7686275243759155, 0.6941176652908325>;
	38: BrickColor<1024, "Pastel light blue", 0.68627452850341798, 0.8666667342185974, 1>;
	39: BrickColor<314, "Cadet blue", 0.62352943420410158, 0.6784313917160034, 0.752941250801086375>;
	40: BrickColor<1013, "Cyan", 0.01568627543747425, 0.68627452850341798, 0.9254902601242065>;
	41: BrickColor<1006, "Alder", 0.7058823704719544, 0.501960813999176, 1>;
	42: BrickColor<321, "Lilac", 0.65490198135375972, 0.36862745881080627, 0.60784316062927249>;
	43: BrickColor<322, "Plum", 0.48235297203063963, 0.18431372940540314, 0.48235297203063963>;
	44: BrickColor<104, "Bright violet", 0.41960787773132325, 0.19607844948768615, 0.4862745404243469>;
	45: BrickColor<1008, "Olive", 0.7568628191947937, 0.74509805440902708, 0.25882354378700256>;
	46: BrickColor<119, "Br. yellowish green", 0.6431372761726379, 0.7411764860153198, 0.278431385755538913>;
	47: BrickColor<323, "Olivine", 0.5803921818733215, 0.74509805440902708, 0.50588238239288326>;
	48: BrickColor<324, "Laurel green", 0.658823549747467, 0.7411764860153198, 0.6000000238418579>;
	49: BrickColor<325, "Quill grey", 0.87450987100601199, 0.87450987100601199, 0.87058830261230464>;
	50: BrickColor<320, "Ghost grey", 0.79215693473815917, 0.7960785031318665, 0.8196079134941101>;
	51: BrickColor<11, "Pastel Blue", 0.501960813999176, 0.733333349227905218, 0.85882359743118282>;
	52: BrickColor<1026, "Pastel violet", 0.6941176652908325, 0.65490198135375972, 1>;
	53: BrickColor<1016, "Pink", 1, 0.40000003576278687, 0.8000000715255737>;
	54: BrickColor<1032, "Hot pink", 1, 0, 0.7490196228027344>;
	55: BrickColor<1015, "Magenta", 0.6666666865348816, 0, 0.6666666865348816>;
	56: BrickColor<327, "Crimson", 0.5921568870544434, 0, 0>;
	57: BrickColor<1017, "Deep orange", 1, 0.6901960968971252, 0>;
	58: BrickColor<1009, "New Yeller", 1, 1, 0>;
	59: BrickColor<29, "Medium green", 0.63137257099151609, 0.7686275243759155, 0.54901963472366328>;
	60: BrickColor<328, "Mint", 0.6941176652908325, 0.8980392813682556, 0.6509804129600525>;
	61: BrickColor<1028, "Pastel green", 0.8000000715255737, 1, 0.8000000715255737>;
	62: BrickColor<208, "Light stone grey", 0.8980392813682556, 0.89411771297454829, 0.87450987100601199>;
	63: BrickColor<45, "Light blue", 0.7058823704719544, 0.8235294818878174, 0.89411771297454829>;
	64: BrickColor<329, "Baby blue", 0.5960784554481506, 0.76078438758850093, 0.85882359743118282>;
	65: BrickColor<330, "Carnation pink", 1, 0.5960784554481506, 0.8627451658248901>;
	66: BrickColor<331, "Persimmon", 1, 0.34901961684226988, 0.34901961684226988>;
	67: BrickColor<1004, "Really red", 1, 0, 0>;
	68: BrickColor<21, "Bright red", 0.7686275243759155, 0.1568627506494522, 0.1098039299249649>;
	69: BrickColor<332, "Maroon", 0.458823561668396, 0, 0>;
	70: BrickColor<333, "Gold", 0.9372549653053284, 0.7215686440467834, 0.2196078598499298>;
	71: BrickColor<24, "Bright yellow", 0.960784375667572, 0.803921639919281, 0.1882353127002716>;
	72: BrickColor<334, "Daisy orange", 0.9725490808486938, 0.85098046064376827, 0.4274510145187378>;
	73: BrickColor<226, "Cool yellow", 0.99215692281723019, 0.917647123336792, 0.5529412031173706>;
	74: BrickColor<1029, "Pastel yellow", 1, 1, 0.8000000715255737>;
	75: BrickColor<335, "Pearl", 0.90588241815567016, 0.90588241815567016, 0.9254902601242065>;
	76: BrickColor<336, "Fog", 0.7803922295570373, 0.8313726186752319, 0.89411771297454829>;
	77: BrickColor<342, "Mauve", 0.8784314393997192, 0.69803923368453974, 0.81568634510040278>;
	78: BrickColor<343, "Sunrise", 0.8313726186752319, 0.5647059082984924, 0.7411764860153198>;
	79: BrickColor<338, "Terra Cotta", 0.74509805440902708, 0.40784317255020139, 0.38431376218795778>;
	80: BrickColor<1007, "Dusty Rose", 0.63921570777893064, 0.29411765933036805, 0.29411765933036805>;
	81: BrickColor<339, "Cocoa", 0.33725491166114807, 0.1411764770746231, 0.1411764770746231>;
	82: BrickColor<133, "Neon orange", 0.83529418706893919, 0.45098042488098143, 0.23921570181846619>;
	83: BrickColor<106, "Bright orange", 0.8549020290374756, 0.5215686559677124, 0.254901975393295263>;
	84: BrickColor<340, "Wheat", 0.9450981020927429, 0.90588241815567016, 0.7803922295570373>;
	85: BrickColor<341, "Buttermilk", 0.9960784912109375, 0.9529412388801575, 0.733333349227905218>;
	86: BrickColor<1001, "Institutional white", 0.9725490808486938, 0.9725490808486938, 0.9725490808486938>;
	87: BrickColor<1, "White", 0.94901967048645018, 0.9529412388801575, 0.9529412388801575>;
	88: BrickColor<9, "Light reddish violet", 0.9098039865493774, 0.72941178083419795, 0.7843137979507446>;
	89: BrickColor<1025, "Pastel orange", 1, 0.7882353663444519, 0.7882353663444519>;
	90: BrickColor<337, "Salmon", 1, 0.5803921818733215, 0.5803921818733215>;
	91: BrickColor<344, "Tawny", 0.58823531866073608, 0.3333333432674408, 0.3333333432674408>;
	92: BrickColor<345, "Rust", 0.56078433990478515, 0.2980392277240753, 0.16470588743686675>;
	93: BrickColor<1014, "CGA brown", 0.6666666865348816, 0.3333333432674408, 0>;
	94: BrickColor<105, "Br. yellowish orange", 0.88627457618713375, 0.60784316062927249, 0.250980406999587985>;
	95: BrickColor<346, "Cashmere", 0.82745105028152464, 0.74509805440902708, 0.58823531866073608>;
	96: BrickColor<347, "Khaki", 0.88627457618713375, 0.8627451658248901, 0.7372549176216125>;
	97: BrickColor<348, "Lily white", 0.929411828517913766, 0.917647123336792, 0.917647123336792>;
	98: BrickColor<349, "Seashell", 0.9137255549430847, 0.8549020290374756, 0.8549020290374756>;
	99: BrickColor<1030, "Pastel brown", 1, 0.8000000715255737, 0.6000000238418579>;
	100: BrickColor<125, "Light orange", 0.917647123336792, 0.7215686440467834, 0.57254904508590699>;
	101: BrickColor<101, "Medium red", 0.8549020290374756, 0.52549022436141965, 0.47843140363693236>;
	102: BrickColor<350, "Burgundy", 0.53333336114883419, 0.24313727021217346, 0.24313727021217346>;
	103: BrickColor<192, "Reddish brown", 0.4117647409439087, 0.250980406999587985, 0.1568627506494522>;
	104: BrickColor<351, "Cork", 0.7372549176216125, 0.60784316062927249, 0.364705890417098976>;
	105: BrickColor<352, "Burlap", 0.7803922295570373, 0.67450982332229609, 0.4705882668495178>;
	106: BrickColor<353, "Beige", 0.79215693473815917, 0.7490196228027344, 0.63921570777893064>;
	107: BrickColor<354, "Oyster", 0.733333349227905218, 0.70196080207824707, 0.69803923368453974>;
	108: BrickColor<1002, "Mid gray", 0.803921639919281, 0.803921639919281, 0.803921639919281>;
	109: BrickColor<5, "Brick yellow", 0.84313732385635373, 0.77254909276962275, 0.60392159223556517>;
	110: BrickColor<18, "Nougat", 0.8000000715255737, 0.556862771511077826, 0.4117647409439087>;
	111: BrickColor<217, "Brown", 0.4862745404243469, 0.3607843220233917, 0.27450981736183164>;
	112: BrickColor<355, "Pine Cone", 0.4235294461250305, 0.3450980484485626, 0.29411765933036805>;
	113: BrickColor<356, "Fawn brown", 0.6274510025978088, 0.5176470875740051, 0.30980393290519712>;
	114: BrickColor<153, "Sand red", 0.584313750267028754, 0.47450983524322509, 0.46666669845581054>;
	115: BrickColor<357, "Hurricane grey", 0.584313750267028754, 0.5372549295425415, 0.53333336114883419>;
	116: BrickColor<358, "Cloudy grey", 0.670588254928588817, 0.658823549747467, 0.61960786581039425>;
	117: BrickColor<359, "Linen", 0.68627452850341798, 0.5803921818733215, 0.5137255191802978>;
	118: BrickColor<360, "Copper", 0.58823531866073608, 0.40392160415649414, 0.40000003576278687>;
	119: BrickColor<38, "Dark orange", 0.6274510025978088, 0.37254902720451354, 0.20784315466880799>;
	120: BrickColor<361, "Dirt brown", 0.33725491166114807, 0.25882354378700256, 0.21176472306251526>;
	121: BrickColor<362, "Bronze", 0.49411767721176145, 0.40784317255020139, 0.24705883860588074>;
	122: BrickColor<199, "Dark stone grey", 0.38823533058166505, 0.37254902720451354, 0.38431376218795778>;
	123: BrickColor<194, "Medium stone grey", 0.63921570777893064, 0.6352941393852234, 0.64705884456634518>;
	124: BrickColor<363, "Flint", 0.4117647409439087, 0.40000003576278687, 0.3607843220233917>;
	125: BrickColor<364, "Dark taupe", 0.35294118523597716, 0.2980392277240753, 0.25882354378700256>;
	126: BrickColor<365, "Burnt Sienna", 0.41568630933761598, 0.22352942824363708, 0.03529411926865578>;
	127: BrickColor<1003, "Really black", 0.066666670143604274, 0.066666670143604274, 0.066666670143604274>;
}

interface BrickColorConstructor {
	/** Constructs a BrickColor from its name. */
	new <T extends BrickColors[keyof BrickColors]["Name"]>(val: T): BrickColors[keyof BrickColors];
	/** Constructs a BrickColor from its numerical index. */
	new <T extends BrickColors[keyof BrickColors]["Number"]>(val: T): BrickColors[keyof BrickColors];

	/** Constructs the closest BrickColor that can be matched to the specified RGB components. */
	new (r: number, g: number, b: number): BrickColors[keyof BrickColors];
	/** Constructs the closest BrickColor that can be matched to the specified Color3. */
	new (color: Color3): BrickColors[keyof BrickColors];
	/** Constructs a BrickColor from its palette index. */
	palette<T extends keyof BrickColors>(paletteValue: T): BrickColors[T];

	/** Returns a random BrickColor. */
	random: () => BrickColors[keyof BrickColors];
	White: () => BrickColors[87];
	Gray: () => BrickColors[123];
	DarkGray: () => BrickColors[122];
	Black: () => BrickColors[3];
	Red: () => BrickColors[68];
	Yellow: () => BrickColors[71];
	Green: () => BrickColors[8];
	Blue: () => BrickColors[21];
}
declare const BrickColor: BrickColorConstructor;

// CFrame
interface CFrame {
	/** The 3D position of the CFrame */
	readonly Position: Vector3;
	/** The 3D position of the CFrame */
	readonly p: Vector3;
	/** The x-coordinate of the position */
	readonly X: number;
	/** The y-coordinate of the position */
	readonly Y: number;
	/** The z-coordinate of the position */
	readonly Z: number;
	/** The forward-direction component of the CFrame’s orientation. */
	readonly LookVector: Vector3;
	/** The right-direction component of the CFrame’s orientation. */
	readonly RightVector: Vector3;
	/** The up-direction component of the CFrame’s orientation. */
	readonly UpVector: Vector3;
	/** Returns the inverse of this CFrame */
	inverse(): CFrame;
	/** Returns a CFrame interpolated between this CFrame and the goal by the fraction alpha */
	Lerp(goal: CFrame, alpha: number): CFrame;
	/** Returns a CFrame transformed from Object to World space. Equivalent to `[CFrame * cf]` */
	toWorldSpace(cf: CFrame): CFrame;
	/** Returns a CFrame transformed from World to Object space. Equivalent to `[CFrame:inverse() * cf]` */
	toObjectSpace(cf: CFrame): CFrame;
	/** Returns a Vector3 transformed from Object to World space. Equivalent to `[CFrame * v3]` */
	pointToWorldSpace(v3: Vector3): Vector3;
	/** Returns a Vector3 transformed from World to Object space. Equivalent to `[CFrame:inverse() * v3]` */
	pointToObjectSpace(v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from Object to World space. Equivalent to `[(CFrame - CFrame.p) *v3]` */
	vectorToWorldSpace(v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from World to Object space. Equivalent to `[(CFrame:inverse() - CFrame:inverse().p) * v3]` */
	vectorToObjectSpace(v3: Vector3): Vector3;
	/** Returns the values: x, y, z, R00, R01, R02, R10, R11, R12, R20, R21, R22, where R00-R22 represent the 3x3 rotation matrix of the CFrame, and xyz represent the position of the CFrame. */
	components(): [number, number, number, number, number, number, number, number, number, number, number, number];
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, Y, X order */
	toEulerAnglesXYZ(): [number, number, number];
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order */
	toEulerAnglesYXZ(): [number, number, number];
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order (Equivalent to toEulerAnglesYXZ) */
	toOrientation(): [number, number, number];
	/** Returns a tuple of a Vector3 and a number which represent the rotation of the CFrame in the axis-angle representation */
	toAxisAngle(): [Vector3, number];
}
interface CFrameConstructor {
	/** Creates a blank identity CFrame. */
	new (): CFrame;
	/** Creates a CFrame from a Vector3 */
	new (pos: Vector3): CFrame;
	/** Creates a CFrame located at pos with it’s lookVector pointing towards the lookAt position. */
	new (pos: Vector3, lookAt: Vector3): CFrame;
	/** Creates a CFrame from position (x, y, z). */
	new (x: number, y: number, z: number): CFrame;
	/** Creates a CFrame from position (x, y, z) and quaternion (qX, qY, qZ, qW) */
	new (x: number, y: number, z: number, qX: number, qY: number, qZ: number, qW: number): CFrame;
	/** Creates a CFrame from position (x, y, z) with an orientation specified by the rotation matrix `[[R00 R01 R02] [R10 R11 R12] [R20 R21 R22]]` */
	new (
		x: number,
		y: number,
		z: number,
		R00: number,
		R01: number,
		R02: number,
		R10: number,
		R11: number,
		R12: number,
		R20: number,
		R21: number,
		R22: number,
	): CFrame;
	/** Equivalent to fromEulerAnglesXYZ */
	Angles: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame from a Unit Vector3 and a rotation in radians */
	fromAxisAngle: (unit: Vector3, rotation: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, Y, X order. */
	fromEulerAnglesXYZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, X, Y order. */
	fromEulerAnglesYXZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a CFrame from a translation and the columns of a rotation matrix. If vz is excluded,
	 * the third column is calculated as `[vx:Cross(vy).Unit]`.
	 */
	fromMatrix: (pos: Vector3, vX: Vector3, vY: Vector3, vZ?: Vector3) => CFrame;
	/** Equivalent to fromEulerAnglesYXZ */
	fromOrientation: (rX: number, rY: number, rZ: number) => CFrame;
}
declare const CFrame: CFrameConstructor;

interface Color3Constructor {
	/** Creates a Color3 whose values are (0,0,0) [black] */
	new (): Color3<0, 0, 0>;
	/** Returns a Color3 with the given red, green, and blue values. The numbers can range from 0 to 1. */
	new <Red extends number = number, Green extends number = number, Blue extends number = number>(
		red: Red,
		green: Green,
		blue: Blue,
	): Color3<Red, Green, Blue>;
	/** Creates a Color3 with the given red, green, and blue. The numbers can range from 0 to 255. */
	fromRGB: (r: number, g: number, b: number) => Color3;
	/** Creates a Color3 with the given hue, saturation, and value. The numbers can range from 0 to 1. */
	fromHSV: (hue: number, sat: number, val: number) => Color3;
	/** Returns the hue, saturation, and value of a Color3. */
	toHSV: (color: Color3) => [number, number, number];
}
declare const Color3: Color3Constructor;

// ColorSequence
interface ColorSequence {
	readonly Keypoints: ReadonlyArray<ColorSequenceKeypoint>;
}
interface ColorSequenceConstructor {
	new (color: Color3): ColorSequence;
	new (c0: Color3, c1: Color3): ColorSequence;
	new (colors: ReadonlyArray<ColorSequenceKeypoint>): ColorSequence;
}
declare const ColorSequence: ColorSequenceConstructor;

// ColorSequenceKeypoint
interface ColorSequenceKeypoint {
	readonly Time: number;
	readonly Value: Color3;
}
interface ColorSequenceKeypointConstructor {
	new (time: number, color: Color3): ColorSequenceKeypoint;
}
declare const ColorSequenceKeypoint: ColorSequenceKeypointConstructor;

// DockWidgetPluginGuiInfo
interface DockWidgetPluginGuiInfo {
	readonly InitialDockState: Enum.InitialDockState;
	readonly InitialEnabled: boolean;
	readonly InitialEnabledShouldOverrideRestore: boolean;
	readonly FloatingXSize: number;
	readonly FloatingYSize: number;
	readonly MinWidth: number;
	readonly MinHeight: number;
}
interface DockWidgetPluginGuiInfoConstructor {
	new (
		initDockState?: Enum.InitialDockState,
		initEnabled?: boolean,
		overrideEnabledRestore?: boolean,
		floatXSize?: number,
		floatYSize?: number,
		minWidth?: number,
		minHeight?: number,
	): DockWidgetPluginGuiInfo;
}
declare const DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfoConstructor;

// Faces
interface Faces {
	readonly Top: boolean;
	readonly Bottom: boolean;
	readonly Back: boolean;
	readonly Front: boolean;
	readonly Right: boolean;
	readonly Left: boolean;
}
interface FacesConstructor {
	new (...ids: Array<Enum.NormalId>): Faces;
}
declare const Faces: FacesConstructor;

// NumberRange
interface NumberRange {
	readonly Min: number;
	readonly Max: number;
}
interface NumberRangeConstructor {
	new (value: number): NumberRange;
	new (minimum: number, maximum: number): NumberRange;
}
declare const NumberRange: NumberRangeConstructor;

// NumberSequence
interface NumberSequence {
	readonly Keypoints: ReadonlyArray<NumberSequenceKeypoint>;
}
interface NumberSequenceConstructor {
	new (val: number): NumberSequence;
	new (keypoints: ReadonlyArray<NumberSequenceKeypoint>): NumberSequence;
}
declare const NumberSequence: NumberSequenceConstructor;

// NumberSequenceKeypoint
interface NumberSequenceKeypoint {
	readonly Envelope: number;
	readonly Time: number;
	readonly Value: number;
}
interface NumberSequenceKeypointConstructor {
	new (): NumberSequenceKeypoint;
	new (time: number, value: number, envelope: number): NumberSequenceKeypoint;
}
declare const NumberSequenceKeypoint: NumberSequenceKeypointConstructor;

// PathWaypoint
interface PathWaypoint {
	readonly Action: Enum.PathWaypointAction;
	readonly Position: Vector3;
}
interface PathWaypointConstructor {
	new (position: Vector3, action: Enum.PathWaypointAction): PathWaypoint;
}
declare const PathWaypoint: PathWaypointConstructor;

// PhysicalProperties
interface PhysicalProperties {
	readonly Density: number;
	readonly Friction: number;
	readonly Elasticity: number;
	readonly FrictionWeight: number;
	readonly ElasticityWeight: number;
}
interface PhysicalPropertiesConstructor {
	new (material: Enum.Material): PhysicalProperties;
	new (density: number, friction: number, elasticity: number): PhysicalProperties;
	new (
		density: number,
		friction: number,
		elasticity: number,
		frictionWeight: number,
		elasticityWeight: number,
	): PhysicalProperties;
}
declare const PhysicalProperties: PhysicalPropertiesConstructor;

// Random
interface Random {
	NextInteger(min: number, max: number): number;
	NextNumber(): number;
	NextNumber(min: number, max: number): number;
	Clone(): Random;
}
interface RandomConstructor {
	new (seed: number): Random;
	new (): Random;
}
declare const Random: RandomConstructor;

// Ray
interface Ray {
	ClosestPoint(point: Vector3): Vector3;
	Distance(point: Vector3): number;
	readonly Origin: Vector3;
	readonly Direction: Vector3;
	readonly Unit: Ray;
}
interface RayConstructor {
	new (origin: Vector3, direction: Vector3): Ray;
}
declare const Ray: RayConstructor;

// Rect
interface Rect {
	readonly Min: Vector2;
	readonly Max: Vector2;
	readonly Width: number;
	readonly Height: number;
}
interface RectConstructor {
	new (min: Vector2, max: Vector2): Rect;
	new (minX: number, minY: number, maxX: number, maxY: number): Rect;
}
declare const Rect: RectConstructor;

// Region3
interface Region3 {
	readonly CFrame: CFrame;
	readonly Size: Vector3;
	ExpandToGrid(resolution: number): Region3;
}
interface Region3Constructor {
	new (min: Vector3, max: Vector3): Region3;
}
declare const Region3: Region3Constructor;

// Region3int16
interface Region3int16 {
	readonly Min: Vector3int16;
	readonly Max: Vector3int16;
}
interface Region3int16Constructor {
	new (min: Vector3int16, max: Vector3int16): Region3int16;
}
declare const Region3int16: Region3int16Constructor;

// TweenInfo
interface TweenInfo {
	readonly Time: number;
	readonly EasingStyle: Enum.EasingStyle;
	readonly EasingDirection: Enum.EasingDirection;
	readonly RepeatCount: number;
	readonly Reverses: boolean;
	readonly DelayTime: number;
}
interface TweenInfoConstructor {
	new (
		time?: number,
		easingStyle?: Enum.EasingStyle,
		easingDirection?: Enum.EasingDirection,
		repeatCount?: number,
		reverses?: boolean,
		delayTime?: number,
	): TweenInfo;
}
declare const TweenInfo: TweenInfoConstructor;

// UDim
interface UDim {
	readonly Scale: number;
	readonly Offset: number;
}
interface UDimConstructor {
	new (scale: number, offset: number): UDim;
}
declare const UDim: UDimConstructor;

// UDim2
interface UDim2 {
	readonly X: UDim;
	readonly Y: UDim;
	readonly Width: UDim;
	readonly Height: UDim;
	Lerp(goal: UDim2, alpha: number): UDim2;
}
interface UDim2Constructor {
	new (): UDim2;
	new (xScale: number, xOffset: number, yScale: number, yOffset: number): UDim2;
	new (xDim: UDim, yDim: UDim): UDim2;
}
declare const UDim2: UDim2Constructor;

// Vector2
interface Vector2 {
	readonly X: number;
	readonly Y: number;
	readonly Unit: Vector2;
	readonly Magnitude: number;
	Dot(other: Vector2): number;
	Lerp(goal: Vector2, alpha: number): Vector2;
	Cross(other: Vector2): Vector2;
}
interface Vector2Constructor {
	new (x?: number, y?: number): Vector2;
}
declare const Vector2: Vector2Constructor;

// Vector2int16
interface Vector2int16 {
	readonly X: number;
	readonly Y: number;
}
interface Vector2int16Constructor {
	new (x?: number, y?: number): Vector2int16;
}
declare const Vector2int16: Vector2int16Constructor;

// Vector3
interface Vector3 {
	Lerp(goal: Vector3, alpha: number): Vector3;
	Dot(other: Vector3): number;
	Cross(other: Vector3): Vector3;
	isClose(other: Vector3, epsilon: number): boolean;
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
	readonly Unit: Vector3;
	readonly Magnitude: number;
}
interface Vector3Constructor {
	new (x?: number, y?: number, z?: number): Vector3;
	FromNormalId: (norm: Enum.NormalId) => Vector3;
	FromAxis: (axis: Enum.Axis) => Vector3;
}
declare const Vector3: Vector3Constructor;

// Vector3int16
interface Vector3int16 {
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
}
interface Vector3int16Constructor {
	new (x?: number, y?: number, z?: number): Vector3;
}
declare const Vector3int16: Vector3int16Constructor;

// unusable internal studio classes
interface QFont {}
interface QDir {}

// built-in globals
declare const game: DataModel;
declare const script: LuaSourceContainer;
declare const shared: object;

// built-in functions
declare function delay(delayTime: number, callback: Callback): void;
declare function elapsedTime(): number;
declare function require(moduleScript: ModuleScript | number): unknown;
declare function settings(): GlobalSettings;
declare function spawn(callback: Callback): void;
declare function tick(): number;
declare function time(): number;
declare function UserSettings(): UserSettings;
declare function version(): string;
declare function wait(seconds?: number): [number, number];
declare function warn(...params: Array<any>): void;

// math functions
declare namespace math {
	/** Returns a perlin noise value between -0.5 and 0.5. If you leave arguments out, they will be interpreted as zero, so math.noise(1.158) is equivalent to math.noise(1.158, 0, 0) and math.noise(1.158, 5.723) is equivalent to math.noise(1.158, 5.723, 0).
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates. For example, math.noise(1.158, 5.723) will always return 0.48397532105446 and math.noise(1.158, 6) will always return 0.15315161645412.
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5. For coordinates that are close to each other, the return values will also be close to each other. */
	function noise(x?: number, y?: number, z?: number): number;

	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}

// type
interface CheckablePrimitives {
	nil: undefined;
	boolean: boolean;
	string: string;
	number: number;
	table: object & Array<unknown>;
	userdata: unknown;
	function: Callback;
}

/**  Returns the type of its only argument, coded as a string. */
declare function type(value: any): keyof CheckablePrimitives;

// typeOf
interface CheckableTypes extends CheckablePrimitives {
	Instance: Instance;
	Axes: Axes;
	BrickColor: BrickColor;
	CFrame: CFrame;
	Color3: Color3;
	ColorSequence: ColorSequence;
	ColorSequenceKeypoint: ColorSequenceKeypoint;
	DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo;
	Faces: Faces;
	NumberRange: NumberRange;
	NumberSequence: NumberSequence;
	NumberSequenceKeypoint: NumberSequenceKeypoint;
	PathWaypoint: PathWaypoint;
	PhysicalProperties: PhysicalProperties;
	Random: Random;
	Ray: Ray;
	Rect: Rect;
	Region3: Region3;
	Region3int16: Region3int16;
	TweenInfo: TweenInfo;
	UDim: UDim;
	UDim2: UDim2;
	Vector2: Vector2;
	Vector2int16: Vector2int16;
	Vector3: Vector3;
	Vector3int16: Vector3int16;
}

/** Returns the type of the given object as a string. This function works similarly to Lua’s native type function, with the exceptions that Roblox-defined data types like Vector3 and CFrame return their respective data types as strings. */
declare function typeOf(value: any): keyof CheckableTypes;

/**
 * Returns true if `typeof(value) == type` otherwise false.
 * This function allows for type narrowing. i.e.
```
// v is unknown
if (typeIs(v, "Vector3")) {
	print(v.X, v.Y, v.Z);
}
```
 * */
declare function typeIs<T extends keyof CheckableTypes>(value: any, type: T): value is CheckableTypes[T];
declare function typeIs(value: any, type: string): boolean;
