import { Image, Surface, Path, Text, Group, geometry } from '@progress/kendo-drawing';
const { Rect, Point, Size, transform } = geometry;

export function drawScene(surface,angle) {
    // Create the square border by drawing a straight path
    const path = new Path({
        stroke: {
            color: "#000000",
            width: 5
        }
    });
      const path2 = new Path({
        stroke: {
            color: "#000000",
            width: 5
        }
    });
        const path3 = new Path({
        stroke: {
            color: "#FF0000",
            width: 2
        }
    });
const text1 = new Text(
    'East',
    new Point(820, 240),
    { font: 'bold 25px Arial' }
);
const text2 = new Text(
    'West',
    new Point(210, 240),
    { font: 'bold 25px Arial' }
);
const text3 = new Text(
    'North',
    new Point(510, 10),
    { font: 'bold 25px Arial' }
);
const text4 = new Text(
    'South',
    new Point(520,470 ),
    { font: 'bold 25px Arial' }
);

    // The path is constructed by using a chain of commands
    path.moveTo(300, 250)
        .lineTo(800,250)
        .close();
    path2.moveTo(550, 50)
        .lineTo(550, 450)
        .close();
path3.moveTo(550,250)
.lineTo(550+300*Math.cos(angle*3.1416/180),250-300*Math.sin(angle*3.1416/180))
.close()
    // This rectangle defines the image position and size
    const group = new Group();
    group.append(path,path2,path3,text1,text2,text3,text4);

    // Translate the group
   

    // Render the group on the surface
    surface.draw(group);
}