nodes = [
  { // 0
    'name': 'DNS Entry',
    'type': 'object',
    'position': { 'x': 1700, 'y': 25, 'w': 200, 'h': 100 },
    'input_items': [
      { 'text': 'CNAME' },
      { 'text': 'Entry', 'value': 'jenkins.lapetus.ninja' }
    ]
  },
  { // 1
    'name': 'Load Balancer',
    'type': 'lb',
    'position': { 'x': 1450, 'y': 100, 'w': 170, 'h': 230 },
    'input_items': [
      { 'text': 'Firewall' },
      { 'text': 'IP address type', 'value': 'IPv4' },
      { 'text': 'Deletion protection', 'value': false },
      { 'text': 'Idle timeout', 'value': 60 },
      { 'text': 'HTTP/2', 'value': true },
      { 'text': 'Access logs' },
      { 'text': 'Drop invalid headers', 'value': true },
      { 'text': 'Listeners' }
    ],
    'output_items': [
      { 'text': 'CNAME' }
    ]
  },
  { // 2
    'name': 'Target Group',
    'type': 'object',
    'position': { 'x': 1000, 'y': 250, 'w': 150, 'h': 150 },
    'input_items': [
      { 'text': 'Instances' },
      { 'text': 'Port', 'value': 30112 },
      { 'text': 'Stickiness', 'value': false },
      { 'text': 'Health Check' }
    ],
    'output_items': []
  },
  { // 3
    'name': 'VM',
    'type': 'vm',
    'position': { 'x': 800, 'y': 25, 'w': 150, 'h': 230 },
    'input_items': [
      { 'text': 'Name', 'value': 'BuildServer' },
      { 'text': 'Count', 'value': 1 },
      { 'text': 'Image' },
      { 'text': 'NIC' },
      { 'text': 'Cores', 'value': 2 },
      { 'text': 'Memory', 'value': 4 },
      { 'text': 'SSH Key', 'value': 'MySSHKey' }
    ],
    'output_items': [
      { 'text': 'ID' },
      { 'text': 'Internal IP' }
    ]
  },
  { // 4
    'name': 'Certificate',
    'type': 'object',
    'position': { 'x' : 1000, 'y': 450, 'w': 150, 'h': 100 },
    'input_items': [
      { 'text': 'SNI', 'value': '*.lapetus.ninja' }
    ],
    'output_items': [
      { 'text': 'Expiration' }
    ]
  },
  { // 5
    'name': 'Network',
    'type': 'network',
    'position': { 'x' : 350, 'y': 600, 'w': 200, 'h': 250 },
    'input_items': [
      { 'text': 'Name', 'value': 'Build' },
      { 'text': 'IPv4 CIDR', 'value': '10.0.0.0/16' },
      { 'text': 'IPv6 CIDR', 'value': '' },
      { 'text': 'DNS resolution', 'value': true },
      { 'text': 'DNS hostnames', 'value': true },
      { 'text': 'Tenancy', 'value': 'default' },
      { 'text': 'Subnets' },
      { 'text': 'Route table' },
      { 'text': 'Network ACL' }
    ],
    'output_items': [
      { 'text': 'ID' }
    ]
  },
  { // 6
    'name': 'Subnet',
    'type': 'object',
    'position': { 'x' : 25, 'y': 400, 'w': 250, 'h': 220 },
    'input_items': [
      { 'text': 'IPv4 CIDR', 'value': '10.0.0.0/24' },
      { 'text': 'IPv6 CIDR', 'value': '' },
      { 'text': 'Public', 'value': false },
      { 'text': 'Auto-assign public IPv4', 'value': true },
      { 'text': 'Auto-assign IPv6', 'value': true },
      { 'text': 'Customer-owned IPv4 pool', 'value': true },
      { 'text': 'Auto-assign customer-owned IPv4', 'value': true },
      { 'text': 'Default subnet', 'value': true },
      { 'text': 'Zone' }
    ],
    'output_items': []
  },
  { // 8
    'name': 'Firewall',
    'type': 'firewall',
    'position': { 'x' : 300, 'y': 50, 'w': 150, 'h': 100 },
    'input_items': [
      { 'text': 'Name', 'value': 'VM Firewall' },
      { 'text': 'Inbound' },
      { 'text': 'Outbound' }
    ],
    'output_items': []
  },
  { // 9
    'name': 'Firewall Rule',
    'type': 'object',
    'position': { 'x' : 25, 'y': 25, 'w': 150, 'h': 120 },
    'input_items': [
      { 'text': 'Name', 'value': 'ssh' },
      { 'text': 'Port Range', 'value': 22 },
      { 'text': 'Protocol', 'value': 'tcp' },
      { 'text': 'Target', 'value': 'self' }
    ],
    'output_items': []
  },
  { // 10
    'name': 'Firewall Rule',
    'type': 'object',
    'position': { 'x' : 25, 'y': 170, 'w': 150, 'h': 120 },
    'input_items': [
      { 'text': 'Name', 'value': 'https' },
      { 'text': 'Port Range', 'value': 30112 },
      { 'text': 'Protocol', 'value': 'tcp' },
      { 'text': 'Target', 'value': 'self' }
    ],
    'output_items': []
  },
  { // 11
    'name': 'Firewall',
    'type': 'firewall',
    'position': { 'x' : 1200, 'y': 25, 'w': 150, 'h': 100 },
    'input_items': [
      { 'text': 'Name', 'value': 'LB Firewall' },
      { 'text': 'Inbound' },
      { 'text': 'Outbound' }
    ],
    'output_items': []
  },
  { // 12
    'name': 'Firewall Rule',
    'type': 'object',
    'position': { 'x': 1000, 'y': 50, 'w': 150, 'h': 120 },
    'input_items': [
      { 'text': 'Name', 'value': 'https' },
      { 'text': 'Port Range', 'value': 443 },
      { 'text': 'Protocol', 'value': 'tcp' },
      { 'text': 'Target', 'value': 'self' }
    ],
    'output_items': []
  },
  { // 13
    'name': 'Health Check',
    'type': 'object',
    'position': { 'x' : 800, 'y': 400, 'w': 150, 'h': 200 },
    'input_items': [
      { 'text': 'Path', 'value': '/' },
      { 'text': 'Port Range', 'value': 'traffic-port' },
      { 'text': 'Protocol', 'value': 'http' },
      { 'text': 'Healthy Threshold', 'value': 5 },
      { 'text': 'Unhealthy Threshold', 'value': 2 },
      { 'text': 'Timeout', 'value': 5 },
      { 'text': 'Interval', 'value': 30 },
      { 'text': 'Success code', 'value': '200-399' },
    ],
    'output_items': []
  },
  { // 14
    'name': 'Listener',
    'type': 'object',
    'position': { 'x' : 1200, 'y': 200, 'w': 150, 'h': 200 },
    'input_items': [
      { 'text': 'Name', 'value': 'HTTP' },
      { 'text': 'Port', 'value': 80 },
      { 'text': 'Protocol', 'value': 'http' },
      { 'text': 'Action' }
    ]
  },
  { // 15
    'name': 'Listener',
    'type': 'object',
    'position': { 'x' : 1200, 'y': 450, 'w': 350, 'h': 200 },
    'input_items': [
      { 'text': 'Name' },
      { 'text': 'Port', 'value': 443 },
      { 'text': 'Protocol', 'value': 'https' },
      { 'text': 'Security policy', 'value': 'TLS 1.2 Minimum' },
      { 'text': 'Default Certificate' },
      { 'text': 'Action' }
    ]
  },
  { // 16
    'name': 'Image',
    'type': 'object',
    'position': { 'x' : 550, 'y': 25, 'w': 150, 'h': 200 },
    'input_items': [
      { 'text': 'Name' },
      { 'text': 'Publisher', 'value': 'Canonical' },
      { 'text': 'Product', 'value': 'UbuntuServer' },
      { 'text': 'SKU', 'value': '18.04-LTS' },
      { 'text': 'Venue Override' }
    ]
  },
  { // 17
    'name': 'NIC',
    'type': 'object',
    'position': { 'x' : 550, 'y': 250, 'w': 150, 'h': 190 },
    'input_items': [
      { 'text': 'Name' },
      { 'text': 'Firewall' },
      { 'text': 'Subnet' },
      { 'text': 'Private IP Type', 'value': 'dynamic' },
      { 'text': 'Public IP Type', 'value': 'static' }
    ],
    'output_items': [
      { 'text': 'Private IP' },
      { 'text': 'Public IP' }
    ]
  }
]

edges = [
  [ 1, 0, 9, 0 ],    // Load Balancer to DNS
  [ 13, 1, -1, 7 ],   // Listener (HTTP) to Load Balancer
  [ 14, 1, -1, 7 ],  // Listener (HTTPS) to LB
  [ 4, 14, -1, 4 ],    // Certificate to Listener
  [ 2, 13, -1, 3 ], // Listener to Target Group
  [ 16, 3, -1, 3 ],    // NIC to VM
  [ 6, 16, -1, 2 ],   // Subnet to NIC
  [ 7, 16, -1, 1 ],   // Firewall to VM

  [ 3, 2, -1, 0 ],   // VM to Target Group
  [ 6, 5, -1, 6 ],   // Subnet to Network
 
  [ 15, 3, -1, 2 ],  // Image to VM

  [ 8, 7, -1, 1 ],   // Firewall Rule (SSH) to Firewall
  [ 9, 7, -1, 1 ],  // Firewall Rule (TCP) to Firewall
  
  [ 11, 10, -1, 1 ], // Firewall Rule (HTTPS) to LB Firewall
  [ 10, 1, -1, 2 ],   // Firewall to LB
  [ 12, 2, -1, 3 ],    // Health Check to Target Group
  
]

vertical_font_spacing = 12;
header_height = 30;

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w, y,   x+w, y+h, r);
  this.arcTo(x+w, y+h, x,   y+h, r);
  this.arcTo(x,   y+h, x,   y,   r);
  this.arcTo(x,   y,   x+w, y,   r);
  this.closePath();
  return this;
}

CanvasRenderingContext2D.prototype.roundTopRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w, y,   x+w, y+h, r);
  this.lineTo(x+w, y+h);
  this.lineTo(x,   y+h);
  this.arcTo(x,   y,   x+w, y,   r);
  this.closePath();
  return this;
}


function connect(ctx, a, b, e) {
  // TODO: Check for directionality (is a.x + a.w <= b.x + eps) where eps maybe = 25
  // When this occurs, control points should extend not referenced to dist but some constant offset
  // or if dist < some values, control points should be referenced to a constant
  var left = a.position.x + a.position.w;
  var right = b.position.x;
  var dist = right - left;

  ctx.beginPath();
  ctx.moveTo(left, a.position.y + header_height + e[2] * (vertical_font_spacing + 8) + 8);
  // Don't draw bezier if the y positions are the same...
  if (dist > 0) {
    ctx.bezierCurveTo(
      left + dist / 2,
      a.position.y + header_height + e[2] * (vertical_font_spacing + 8) + 8,
      left + dist / 2,
      b.position.y + header_height + e[3] * (vertical_font_spacing + 8) + 8,
      b.position.x,
      b.position.y + header_height + e[3] * (vertical_font_spacing + 8) + 8
    );
  } else {
    ctx.bezierCurveTo(
      left + 150,
      a.position.y + header_height + e[2] * (vertical_font_spacing + 8) + 8,
      b.position.x - 150,
      b.position.y + header_height + e[3] * (vertical_font_spacing + 8) + 8,
      b.position.x,
      b.position.y + header_height + e[3] * (vertical_font_spacing + 8) + 8
    );
  }
  ctx.strokeStyle = "rgb(255, 255, 255)";
  ctx.stroke();
}

function drawHeader(ctx, node) {


  //ctx.shadowOffsetX = 2;
  //ctx.shadowOffsetY = 2;
  //ctx.shadowBlur = 2;
  //ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '20px Roboto';
  ctx.fillStyle = 'White';
  //var header_string_measurement = ctx.measureText(node.name);
  ctx.fillText(node.name, 6 + node.position.x, 20 + node.position.y);
}

function drawItems(ctx, node) {
  input = node.input_items;
  output = node.output_items;

  if (input === undefined && output == undefined)
    return;

  ctx.fillStyle = 'White';
  ctx.font = '12px Roboto';
  var draw_offset_y = 4 + node.position.y + header_height;
  
  if (input !== undefined)
  {
    for (var i = 0; i < input.length; ++i) {
      //var item_string_measurement = ctx.measureText(input[i].text);
      ctx.fillStyle = 'white';
      if (input[i].value !== undefined) {
        ctx.fillText(input[i].text + ': ' + input[i].value, 14 + node.position.x, 8 + draw_offset_y);
      } else {
        ctx.fillText(input[i].text, 14 + node.position.x, 8 + draw_offset_y);
      }
      
      
      // Input Node
      ctx.beginPath();
      ctx.arc(node.position.x + 8, draw_offset_y + 4, 4, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();

      // Output Node
      //ctx.beginPath();
      //ctx.arc(node.position.x + node.position.w - 8, draw_offset_y + 4, 4, 0, 2 * Math.PI, false);
      //ctx.fillStyle = 'purple';
      //ctx.fill();

      draw_offset_y += vertical_font_spacing + 8;
      
    }
  }

  if (output !== undefined)
  {
    if (node.type !== 'constant')
      draw_offset_y += vertical_font_spacing + 8;

    for (var i = 0; i < output.length; ++i) {
      //var item_string_measurement = ctx.measureText(output[i].text);
      ctx.fillStyle = 'white';
      if (output[i].value !== undefined) {
        ctx.fillText(output[i].text + ': ' + output[i].value, 14 + node.position.x, 8 + draw_offset_y);
      } else {
        ctx.fillText(output[i].text, 14 + node.position.x, 8 + draw_offset_y);
      }
      
      
      // Input Node
      //ctx.beginPath();
      //ctx.arc(node.position.x + 8, draw_offset_y + 4, 4, 0, 2 * Math.PI, false);
      //ctx.fillStyle = 'green';
      //ctx.fill();

      // Output Node
      ctx.beginPath();
      ctx.arc(node.position.x + node.position.w - 8, draw_offset_y + 4, 4, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'purple';
      ctx.fill();

      draw_offset_y += vertical_font_spacing + 8;
    }
  }
}

let isDragging = false;
let x = 0;
let y = 0;
let currentNode = null;
let currentNodeDragOffset = { 'x': 0, 'y': 0 };
const canvas = document.getElementById('nodeeditor');

function init() {
  canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    if (currentNode != null)
      isDragging = true;
  });

  canvas.addEventListener('mouseup', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDragging = false;
    currentNode = null;
    currentNodeDragOffset = { 'x': 0, 'y': 0 };
  });

  canvas.addEventListener('mousemove', e => {
    x = e.offsetX;
    y = e.offsetY;
    if (isDragging) {
      nodes[currentNode].position.x = x + currentNodeDragOffset.x;
      nodes[currentNode].position.y = y + currentNodeDragOffset.y;
      draw();
    } else {
      for (var i = 0; i < nodes.length; ++i) {
        if (x > nodes[i].position.x && x < nodes[i].position.x + nodes[i].position.w &&
          y > nodes[i].position.y && y < nodes[i].position.y + nodes[i].position.h)
          {
            currentNode = i;
            currentNodeDragOffset.x = nodes[i].position.x - x;
            currentNodeDragOffset.y = nodes[i].position.y - y;
            return;
          }
      }
    }
  });
}

function draw() {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < edges.length; ++i)
      connect(ctx, nodes[edges[i][0]], nodes[edges[i][1]], edges[i])

    for (var i = 0; i < nodes.length; ++i) {
      ctx.roundRect(nodes[i].position.x, nodes[i].position.y, nodes[i].position.w, nodes[i].position.h, 5);
      switch (nodes[i].type) {
        case 'object':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(19, 74, 120, 0.2)";
          break;
        case 'vm':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(83, 52, 101, 0.2)";
          break;
        case 'lb':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(120, 74, 19, 0.2)";
          break;
        case 'constant':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(200, 74, 74, 0.2)";
          break;
        case 'firewall':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(120, 19, 74, 0.2)";
          break;
        case 'network':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(19, 120, 19, 0.2)";
          break;
        default:
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(127, 79, 155, 0.2)";
          break;
      }
      ctx.stroke();
      ctx.fill();

      ctx.roundTopRect(nodes[i].position.x, nodes[i].position.y, nodes[i].position.w, 28, 5)
      switch (nodes[i].type) {
        case 'object':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(19, 74, 120, 0.4)";
          break;
        case 'vm':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(83, 52, 101, 0.4)";
          break;
        case 'lb':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(120, 74, 19, 0.4)";
          break;
        case 'constant':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(200, 74, 74, 0.4)";
          break;
        case 'firewall':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(120, 19, 74, 0.4)";
          break;
        case 'network':
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(19, 120, 19, 0.4)";
          break;
        default:
          ctx.strokeStyle = "rgb(255, 255, 255)";
          ctx.fillStyle = "rgb(127, 79, 155, 0.4)";
          break;
      }
      
      ctx.stroke();
      ctx.fill();

      drawHeader(ctx, nodes[i]);
      drawItems(ctx, nodes[i]);
    }
  }
}


window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  var canvas = document.getElementById('nodeeditor');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw();
}
resizeCanvas();