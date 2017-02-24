!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React"),require("lodash"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","_","ReactDOM"],e):"object"==typeof exports?exports["storm-react-diagrams"]=e(require("React"),require("lodash"),require("ReactDOM")):t["storm-react-diagrams"]=e(t.React,t._,t.ReactDOM)}(this,function(t,e,n){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=27)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(4),r=n(3),s=n(1),a=function(t){function e(){var e=t.call(this)||this;return e.id=i.Toolkit.UID(),e.selected=!1,e}return o(e,t),e.prototype.getID=function(){return this.id},e.prototype.isSelected=function(){return this.selected},e.prototype.setSelected=function(t){this.selected=t,this.itterateListeners(function(t){t.selectionChanged&&t.selectionChanged()})},e.prototype.remove=function(){console.log("removing: ",this),this.itterateListeners(function(t){t.entityRemoved&&t.entityRemoved()})},e}(r.BaseEnity);e.BaseModel=a;var c=function(t){function e(e,n){var o=t.call(this)||this;return o.x=n.x,o.y=n.y,o.link=e,o}return o(e,t),e.prototype.remove=function(){t.prototype.remove.call(this),this.link&&this.link.removePoint(this)},e.prototype.updateLocation=function(t){this.x=t.x,this.y=t.y},e.prototype.getX=function(){return this.x},e.prototype.getY=function(){return this.y},e.prototype.getLink=function(){return this.link},e}(a);e.PointModel=c;var p=function(t){function e(){var e=t.call(this)||this;return e.linkType="default",e.points=[new c(e,{x:0,y:0}),new c(e,{x:0,y:0})],e.extras={},e.sourcePort=null,e.targetPort=null,e}return o(e,t),e.prototype.remove=function(){t.prototype.remove.call(this),this.sourcePort&&this.sourcePort.removeLink(this),this.targetPort&&this.targetPort.removeLink(this)},e.prototype.isLastPoint=function(t){var e=this.getPointIndex(t);return e===this.points.length-1},e.prototype.getPointIndex=function(t){return this.points.indexOf(t)},e.prototype.getPointModel=function(t){for(var e=0;e<this.points.length;e++)if(this.points[e].id===t)return this.points[e];return null},e.prototype.getFirstPoint=function(){return this.points[0]},e.prototype.getLastPoint=function(){return this.points[this.points.length-1]},e.prototype.setSourcePort=function(t){t.addLink(this),this.sourcePort=t},e.prototype.getSourcePort=function(){return this.sourcePort},e.prototype.getTargetPort=function(){return this.targetPort},e.prototype.setTargetPort=function(t){t.addLink(this),this.targetPort=t},e.prototype.getPoints=function(){return this.points},e.prototype.setPoints=function(t){this.points=t},e.prototype.removePoint=function(t){this.points.splice(this.getPointIndex(t),1)},e.prototype.addPoint=function(t,e){void 0===e&&(e=1),this.points.splice(e,0,t)},e.prototype.getType=function(){return this.linkType},e}(a);e.LinkModel=p;var u=function(t){function e(e){var n=t.call(this)||this;return n.name=e,n.links={},n.parentNode=null,n}return o(e,t),e.prototype.getName=function(){return this.name},e.prototype.getParent=function(){return this.parentNode},e.prototype.setParentNode=function(t){this.parentNode=t},e.prototype.removeLink=function(t){delete this.links[t.getID()]},e.prototype.addLink=function(t){this.links[t.getID()]=t},e.prototype.getLinks=function(){return this.links},e}(a);e.PortModel=u;var d=function(t){function e(e){void 0===e&&(e="default");var n=t.call(this)||this;return n.nodeType=e,n.x=0,n.y=0,n.extras={},n.ports={},n}return o(e,t),e.prototype.remove=function(){t.prototype.remove.call(this);for(var e in this.ports)s.forEach(this.ports[e].getLinks(),function(t){t.remove()})},e.prototype.getPort=function(t){return this.ports[t]},e.prototype.getPorts=function(){return this.ports},e.prototype.removePort=function(t){this.ports[t.name]&&(this.ports[t.name].setParentNode(null),delete this.ports[t.name])},e.prototype.addPort=function(t){return t.setParentNode(this),this.ports[t.name]=t,t},e.prototype.getType=function(){return this.nodeType},e}(a);e.NodeModel=d},function(t,e,n){"use strict";var o=n(4),i=function(){function t(){}return t}();e.BaseListener=i;var r=function(){function t(){this.listeners={},this.id=o.Toolkit.UID()}return t.prototype.getID=function(){return this.id},t.prototype.clearListeners=function(){this.listeners={}},t.prototype.itterateListeners=function(t){for(var e in this.listeners)t(this.listeners[e])},t.prototype.removeListener=function(t){return!!this.listeners[t]&&(delete this.listeners[t],!0)},t.prototype.addListener=function(t){var e=o.Toolkit.UID();return this.listeners[e]=t,e},t}();e.BaseEnity=r},function(t,e,n){"use strict";var o=function(){function t(){}return t.UID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)})},t}();e.Toolkit=o},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=function(){function t(t){this.type=t}return t.prototype.getType=function(){return this.type},t}();e.WidgetFactory=i;var r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(i);e.NodeWidgetFactory=r;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(i);e.LinkWidgetFactory=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),r=n(3),s=n(1),a=function(t){function e(){var e=t.call(this)||this;return e.links={},e.nodes={},e.offsetX=0,e.offsetY=0,e.zoom=100,e}return o(e,t),e.prototype.clearSelection=function(t){void 0===t&&(t=null),s.forEach(this.getSelectedItems(),function(e){t&&t.getID()===e.getID()||e.setSelected(!1)})},e.prototype.getSelectedItems=function(){var t=[];return t=t.concat(s.filter(this.nodes,function(t){return t.isSelected()})),t=t.concat(s.filter(s.flatMap(this.links,function(t){return t.points}),function(t){return t.isSelected()})),t.concat(s.filter(this.links,function(t){return t.isSelected()}))},e.prototype.setZoomLevel=function(t){this.zoom=t,this.itterateListeners(function(t){t.controlsUpdated()})},e.prototype.setOffset=function(t,e){this.offsetX=t,this.offsetY=e,this.itterateListeners(function(t){t.controlsUpdated()})},e.prototype.setOffsetX=function(t){this.offsetX=t,this.itterateListeners(function(t){t.controlsUpdated()})},e.prototype.setOffsetY=function(t){this.offsetX=t,this.itterateListeners(function(t){t.controlsUpdated()})},e.prototype.getOffsetY=function(){return this.offsetY},e.prototype.getOffsetX=function(){return this.offsetX},e.prototype.getZoomLevel=function(){return this.zoom},e.prototype.getNode=function(t){return t instanceof i.NodeModel?t:this.nodes[t]?this.nodes[t]:null},e.prototype.getLink=function(t){return t instanceof i.LinkModel?t:this.links[t]?this.links[t]:null},e.prototype.addLink=function(t){var e=this;return t.addListener({entityRemoved:function(){e.removeLink(t)}}),this.links[t.getID()]=t,this.itterateListeners(function(t){t.linksUpdated()}),t},e.prototype.addNode=function(t){var e=this;return t.addListener({entityRemoved:function(){e.removeNode(t)}}),this.nodes[t.getID()]=t,this.itterateListeners(function(t){t.nodesUpdated()}),t},e.prototype.removeLink=function(t){return t instanceof i.LinkModel?(delete this.links[t.getID()],void this.itterateListeners(function(t){t.linksUpdated()})):(delete this.links[""+t],void this.itterateListeners(function(t){t.linksUpdated()}))},e.prototype.removeNode=function(t){return t instanceof i.NodeModel?(delete this.nodes[t.getID()],void this.itterateListeners(function(t){t.nodesUpdated()})):(delete this.nodes[""+t],void this.itterateListeners(function(t){t.nodesUpdated()}))},e.prototype.getLinks=function(){return this.links},e.prototype.getNodes=function(){return this.nodes},e}(r.BaseEnity);e.DiagramModel=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=n(2),s=n(1),a=function(t){function e(e){var n=t.call(this,e)||this;return n.state={selected:!1},n}return o(e,t),e.prototype.generatePoint=function(t){var e=this;return i.DOM.g({key:"point-"+this.props.link.points[t].id},i.DOM.circle({className:"point pointui"+(this.props.link.points[t].isSelected()?" selected":""),cx:this.props.link.points[t].x,cy:this.props.link.points[t].y,r:5}),i.DOM.circle({className:"point","data-linkid":this.props.link.id,"data-id":this.props.link.points[t].id,cx:this.props.link.points[t].x,cy:this.props.link.points[t].y,r:15,opacity:0,onMouseLeave:function(){e.setState({selected:!1})},onMouseEnter:function(){e.setState({selected:!0})}}))},e.prototype.generateLink=function(t){var e=this,n=i.DOM.path(s.merge({className:this.state.selected||this.props.link.isSelected()?"selected":"",strokeWidth:this.props.width,stroke:this.props.color},t)),o=i.DOM.path(s.merge({onMouseLeave:function(){e.setState({selected:!1})},onMouseEnter:function(){e.setState({selected:!0})},"data-linkid":this.props.link.getID(),stroke:this.props.color,strokeOpacity:this.state.selected?.1:0,strokeWidth:20,onContextMenu:function(t){t.preventDefault(),e.props.link.remove()}},t));return i.DOM.g({key:"link-"+t.id},n,o)},e.prototype.render=function(){var t=this,e=this.props.link.points,n=[];if(2===e.length){var o=50;Math.abs(e[0].x-e[1].x)<50&&(o=5);var s=e[0],a=e[1];s.x>a.x&&(s=e[1],a=e[0]),n.push(this.generateLink({id:0,onMouseDown:function(e){if(!e.shiftKey){var n=new r.PointModel(t.props.link,t.props.diagramEngine.getRelativeMousePoint(e));n.setSelected(!0),t.forceUpdate(),t.props.link.addPoint(n,1),t.props.pointAdded(n,e)}},d:" M"+s.x+" "+s.y+" C"+(s.x+o)+" "+s.y+" "+(a.x-o)+" "+a.y+" "+a.x+" "+a.y})),null===this.props.link.targetPort&&n.push(this.generatePoint(1))}else{var c=[];if(this.props.smooth){c.push(" M"+e[0].x+" "+e[0].y+" C "+(e[0].x+50)+" "+e[0].y+" "+e[1].x+" "+e[1].y+" "+e[1].x+" "+e[1].y);for(var p=1;p<e.length-2;p++)c.push(" M "+e[p].x+" "+e[p].y+" L "+e[p+1].x+" "+e[p+1].y);c.push(" M"+e[p].x+" "+e[p].y+" C "+e[p].x+" "+e[p].y+" "+(e[p+1].x-50)+" "+e[p+1].y+" "+e[p+1].x+" "+e[p+1].y)}else for(var c=[],p=0;p<e.length-1;p++)c.push(" M "+e[p].x+" "+e[p].y+" L "+e[p+1].x+" "+e[p+1].y);n=c.map(function(e,n){return t.generateLink({id:n,"data-linkid":t.props.link.id,"data-point":n,onMouseDown:function(e){if(!e.shiftKey){var o=new r.PointModel(t.props.link,t.props.diagramEngine.getRelativeMousePoint(e));o.setSelected(!0),t.forceUpdate(),t.props.link.addPoint(o,n+1),t.props.pointAdded(o,e)}},d:e})});for(var p=1;p<e.length-1;p++)n.push(this.generatePoint(p));null===this.props.link.targetPort&&n.push(this.generatePoint(e.length-1))}return i.DOM.g(null,n)},e}(i.Component);a.defaultProps={color:"black",width:3,link:null,engine:null,smooth:!1,diagramEngine:null},e.DefaultLinkWidget=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=n(1),s=i.DOM.div,a=n(24),c=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.render=function(){return s({className:"basic-node",style:{background:this.props.node.color}},s({className:"title"},s({className:"name"},this.props.node.name),s({className:"fa fa-close",onClick:this.props.node.remove})),s({className:"ports"},s({className:"in"},r.map(this.props.node.getInPorts(),function(t){return i.createElement(a.DefaultPortLabel,{model:t})})),s({className:"out"},r.map(this.props.node.getOutPorts(),function(t){return i.createElement(a.DefaultPortLabel,{model:t})}))))},e}(i.Component);c.defaultProps={node:null},e.DefaultNodeWidget=c},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=n(10),s=n(1),a=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.componentDidMount=function(){var t=this;setTimeout(function(){t.forceUpdate()},10)},e.prototype.render=function(){var t=this,e=this.props.diagramEngine.getDiagramModel();return i.DOM.svg({style:{transform:"scale("+e.getZoomLevel()/100+") translate("+e.getOffsetX()+"px,"+e.getOffsetY()+"px)",width:"100%",height:"100%"}},s.map(e.getLinks(),function(n){if(null!==n.sourcePort)try{n.points[0].updateLocation(t.props.diagramEngine.getPortCenter(n.sourcePort))}catch(t){return console.log(t),void e.removeLink(n)}if(null!==n.targetPort)try{s.last(n.points).updateLocation(t.props.diagramEngine.getPortCenter(n.targetPort))}catch(t){return console.log(t),void e.removeLink(n)}var o=t.props.diagramEngine.generateWidgetForLink(n);return o?i.createElement(r.LinkWidget,{key:n.getID(),link:n,diagramEngine:t.props.diagramEngine},i.cloneElement(o,{pointAdded:t.props.pointAdded})):(console.log("no link generated for type: "+n.getType()),null)}))},e}(i.Component);e.LinkLayerWidget=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.shouldComponentUpdate=function(){return this.props.diagramEngine.canEntityRepaint(this.props.link)},e.prototype.render=function(){return this.props.children},e}(i.Component);e.LinkWidget=r},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=n(1),s=n(12),a=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.render=function(){var t=this,e=this.props.diagramEngine.getDiagramModel();return i.DOM.div({className:"node-view",style:{transform:"scale("+e.getZoomLevel()/100+") translate("+e.getOffsetX()+"px,"+e.getOffsetY()+"px)",width:"100%",height:"100%"}},r.map(e.getNodes(),function(e){return i.createElement(s.NodeWidget,{diagramEngine:t.props.diagramEngine,key:e.id,node:e},t.props.diagramEngine.generateWidgetForNode(e))}))},e}(i.Component);e.NodeLayerWidget=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.shouldComponentUpdate=function(){return this.props.diagramEngine.canEntityRepaint(this.props.node)},e.prototype.render=function(){return i.DOM.div({"data-nodeid":this.props.node.id,className:"node"+(this.props.node.isSelected()?" selected":""),style:{top:this.props.node.y,left:this.props.node.x}},i.cloneElement(this.props.children,{}))},e}(i.Component);e.NodeWidget=r},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=function(t){function e(e){var n=t.call(this,e)||this;return n.state={selected:!1},n}return o(e,t),e.prototype.render=function(){var t=this;return i.DOM.div({onMouseEnter:function(){t.setState({selected:!0})},onMouseLeave:function(){t.setState({selected:!1})},className:"port"+(this.state.selected?" selected":""),"data-name":this.props.name,"data-nodeid":this.props.node.getID()})},e}(i.Component);e.PortWidget=r},function(t,e,n){var o=n(17);"string"==typeof o&&(o=[[t.i,o,""]]);n(19)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(21)),o(n(7)),o(n(22)),o(n(8)),o(n(23)),o(n(25)),o(n(5)),o(n(4)),o(n(20)),o(n(6)),o(n(3)),o(n(2)),o(n(26)),o(n(9)),o(n(10)),o(n(11)),o(n(12)),o(n(13))},function(t,e){t.exports=n},function(t,e,n){e=t.exports=n(18)(),e.push([t.i,"*{margin:0;padding:0}body,html{width:100%;height:100%;background:#3c3c3c;display:flex}.storm-diagrams-canvas{position:relative;flex-grow:1;display:flex;cursor:move;overflow:hidden}.storm-diagrams-canvas .point{fill:hsla(0,0%,100%,.5)}.storm-diagrams-canvas .point.selected{fill:#00c0ff}.storm-diagrams-canvas .selector{position:absolute;background-color:rgba(0,192,255,.2);border:2px solid #00c0ff}.storm-diagrams-canvas svg{position:absolute;height:100%;width:100%;transform-origin:0 0;overflow:visible}.storm-diagrams-canvas .node-view{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;transform-origin:0 0}.storm-diagrams-canvas .node{position:absolute;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;cursor:move;pointer-events:all}.storm-diagrams-canvas .node.selected>*{border-color:#00c0ff!important;box-shadow:0 0 20px rgba(0,192,255,.5)}@keyframes dash{0%{stroke-dashoffset:24}to{stroke-dashoffset:0}}.storm-diagrams-canvas path{fill:none;pointer-events:all}.storm-diagrams-canvas path.selected{stroke:#00c0ff!important;stroke-dasharray:10,2;animation:dash 1s linear infinite}.storm-diagrams-canvas .port{width:15px;height:15px;background:hsla(0,0%,100%,.1)}.storm-diagrams-canvas .port.selected,.storm-diagrams-canvas .port:hover{background:#c0ff00}.storm-diagrams-canvas .basic-node{background-color:#1e1e1e;border-radius:5px;font-family:Arial;color:#fff;border:2px solid #000;overflow:hidden;font-size:11px;box-shadow:0 0 10px rgba(0,0,0,.5)}.storm-diagrams-canvas .basic-node .title{background:rgba(0,0,0,.3);display:flex;white-space:nowrap}.storm-diagrams-canvas .basic-node .title>*{align-self:center}.storm-diagrams-canvas .basic-node .title .fa{padding:5px;opacity:.2;cursor:pointer}.storm-diagrams-canvas .basic-node .title .fa:hover{opacity:1}.storm-diagrams-canvas .basic-node .title .name{flex-grow:1;padding:5px}.storm-diagrams-canvas .basic-node .ports{display:flex;background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.2))}.storm-diagrams-canvas .basic-node .ports .in,.storm-diagrams-canvas .basic-node .ports .out{flex-grow:1;display:flex;flex-direction:column}.storm-diagrams-canvas .basic-node .ports .in-port,.storm-diagrams-canvas .basic-node .ports .out-port{display:flex;margin-top:1px}.storm-diagrams-canvas .basic-node .ports .in-port>*,.storm-diagrams-canvas .basic-node .ports .out-port>*{align-self:center}.storm-diagrams-canvas .basic-node .ports .in-port .name,.storm-diagrams-canvas .basic-node .ports .out-port .name{padding:0 5px}.storm-diagrams-canvas .basic-node .ports .out-port{justify-content:flex-end}.storm-diagrams-canvas .basic-node .ports .out-port .name{justify-content:flex-end;text-align:right}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=l[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],e))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(c(o.parts[r],e));l[o.id]={id:o.id,refs:1,parts:s}}}}function o(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],r=i[0],s=i[1],a=i[2],c=i[3],p={css:s,media:a,sourceMap:c};n[r]?n[r].parts.push(p):e.push(n[r]={id:r,parts:[p]})}return e}function i(t,e){var n=g(),o=v[v.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function c(t,e){var n,o,i;if(e.singleton){var c=y++;n=m||(m=s(e)),o=p.bind(null,n,c,!1),i=p.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(e),o=d.bind(null,n),i=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=u.bind(null,n),i=function(){r(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function p(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function u(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var l={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,v=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=o(t);return n(i,e),function(t){for(var r=[],s=0;s<i.length;s++){var a=i[s],c=l[a.id];c.refs--,r.push(c)}if(t){var p=o(t);n(p,e)}for(var s=0;s<r.length;s++){var c=r[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete l[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),r=n(3),s=n(6),a=n(1),c=function(t){function e(){var e=t.call(this)||this;return e.diagramModel=new s.DiagramModel,e.nodeFactories={},e.linkFactories={},e.canvas=null,e.paintableWidgets=null,e}return o(e,t),e.prototype.clearRepaintEntities=function(){this.paintableWidgets=null},e.prototype.enableRepaintEntities=function(t){var e=this;this.paintableWidgets={},t.forEach(function(t){t instanceof i.NodeModel&&a.forEach(t.getPorts(),function(t){a.forEach(t.getLinks(),function(t){e.paintableWidgets[t.getID()]=!0})}),t instanceof i.PointModel&&(e.paintableWidgets[t.getLink().getID()]=!0),e.paintableWidgets[t.getID()]=!0})},e.prototype.canEntityRepaint=function(t){return null===this.paintableWidgets||void 0!==this.paintableWidgets[t.getID()]},e.prototype.setCanvas=function(t){this.canvas=t},e.prototype.setDiagramModel=function(t){this.diagramModel=t},e.prototype.getDiagramModel=function(){return this.diagramModel},e.prototype.getNodeFactories=function(){return this.nodeFactories},e.prototype.getLinkFactories=function(){return this.linkFactories},e.prototype.registerNodeFactory=function(t){this.nodeFactories[t.getType()]=t,this.itterateListeners(function(t){t.nodeFactoriesUpdated()})},e.prototype.registerLinkFactory=function(t){this.linkFactories[t.getType()]=t,this.itterateListeners(function(t){t.linkFactoriesUpdated()})},e.prototype.getFactoryForNode=function(t){return this.nodeFactories[t.getType()]?this.nodeFactories[t.getType()]:(console.log("cannot find widget factory for node of type: ["+t.getType()+"]"),null)},e.prototype.getFactoryForLink=function(t){return this.linkFactories[t.getType()]?this.linkFactories[t.getType()]:(console.log("cannot find widget factory for link of type: ["+t.getType()+"]"),null)},e.prototype.generateWidgetForLink=function(t){var e=this.getFactoryForLink(t);if(!e)throw"Cannot find link factory for link: "+t.getType();return e.generateReactWidget(this,t)},e.prototype.generateWidgetForNode=function(t){var e=this.getFactoryForNode(t);if(!e)throw"Cannot find widget factory for node: "+t.getType();return e.generateReactWidget(this,t)},e.prototype.getRelativeMousePoint=function(t){var e=this.getRelativePoint(t.pageX,t.pageY);return{x:e.x/(this.diagramModel.getZoomLevel()/100)-this.diagramModel.getOffsetX(),y:e.y/(this.diagramModel.getZoomLevel()/100)-this.diagramModel.getOffsetY()}},e.prototype.getRelativePoint=function(t,e){var n=this.canvas.getBoundingClientRect();return{x:t-n.left,y:e-n.top}},e.prototype.getNodePortElement=function(t){var e=this.canvas.querySelector('.port[data-name="'+t.getName()+'"][data-nodeid="'+t.getParent().getID()+'"]');if(null===e)throw"Cannot find Node Port element with nodeID: ["+t.getParent().getID()+"] and name: ["+t.getName()+"]";return e},e.prototype.getPortCenter=function(t){var e=this.getNodePortElement(t),n=e.getBoundingClientRect(),o=this.getRelativePoint(n.left,n.top);return{x:e.offsetWidth/2+o.x/(this.diagramModel.getZoomLevel()/100)-this.diagramModel.getOffsetX(),y:e.offsetHeight/2+o.y/(this.diagramModel.getZoomLevel()/100)-this.diagramModel.getOffsetY()}},e}(r.BaseEnity);e.DiagramEngine=c},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(5),r=n(0),s=n(7),a=function(t){function e(){return t.call(this,"default")||this}return o(e,t),e.prototype.generateReactWidget=function(t,e){return r.createElement(s.DefaultLinkWidget,{link:e,diagramEngine:t})},e}(i.LinkWidgetFactory);e.DefaultLinkFactory=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(5),r=n(0),s=n(8),a=function(t){function e(){return t.call(this,"default")||this}return o(e,t),e.prototype.generateReactWidget=function(t,e){return r.createElement(s.DefaultNodeWidget,{node:e,diagramEngine:t})},e}(i.NodeWidgetFactory);e.DefaultNodeFactory=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),r=n(1),s=function(t){function e(e,n){void 0===e&&(e="Untitled"),void 0===n&&(n="rgb(0,192,255)");var o=t.call(this,"default")||this;return o.name=e,o.color=n,o}return o(e,t),e.prototype.getInPorts=function(){return r.filter(this.ports,function(t){return t.in})},e.prototype.getOutPorts=function(){return r.filter(this.ports,function(t){return!t.in})},e}(i.NodeModel);e.DefaultNodeModel=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=n(13),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){var t=i.createElement(r.PortWidget,{name:this.props.model.name,node:this.props.model.getParent()}),e=i.DOM.div({className:"name"},this.props.model.label);return i.DOM.div({className:(this.props.model.in?"in":"out")+"-port"},this.props.model.in?t:e,this.props.model.in?e:t)},e}(i.Component);s.defaultProps={in:!0,label:"port"},e.DefaultPortLabel=s},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),r=function(t){function e(e,n,o){void 0===o&&(o=null);var i=t.call(this,n)||this;return i.in=e,i.label=o||n,i}return o(e,t),e}(i.PortModel);e.DefaultPortModel=r},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(0),r=n(1),s=n(2),a=n(9),c=n(11),p=function(){function t(t,e){this.mouseX=t,this.mouseY=e,this.ms=(new Date).getTime()}return t}();e.BaseAction=p;var u=function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.mouseX2=e,o.mouseY2=n,o}return o(e,t),e.prototype.containsElement=function(t,e,n){var o=n.getZoomLevel()/100;return(t+n.getOffsetX())*o>this.mouseX&&(t+n.getOffsetX())*o<this.mouseX2&&(e+n.getOffsetY())*o>this.mouseY&&(e+n.getOffsetY())*o<this.mouseY2},e}(p),d=function(t){function e(e,n,o){var i=t.call(this,e,n)||this;return i.initialOffsetX=o.getOffsetX(),i.initialOffsetY=o.getOffsetY(),i}return o(e,t),e}(p),l=function(t){function e(e,n,o){var i=t.call(this,e,n)||this;return i.moved=!1,o.enableRepaintEntities(o.getDiagramModel().getSelectedItems()),i.selectionModels=o.getDiagramModel().getSelectedItems().map(function(t){return{model:t,initialX:t.x,initialY:t.y}}),i}return o(e,t),e}(p),f=function(t){function e(e){var n=t.call(this,e)||this;return n.state={action:null,renderedNodes:!1,windowListener:null},n}return o(e,t),e.prototype.componentWillUnmount=function(){this.props.diagramEngine.setCanvas(null),window.removeEventListener("keydown",this.state.windowListener)},e.prototype.componentWillReceiveProps=function(t){this.props.diagramEngine.id!==t.diagramEngine.id&&this.setState({renderedNodes:!1})},e.prototype.getMouseElement=function(t){var e=t.target,n=this.props.diagramEngine.diagramModel,o=e.closest(".port[data-name]");if(o){var i=e.closest(".node[data-nodeid]");return{model:n.getNode(i.getAttribute("data-nodeid")).getPort(o.getAttribute("data-name")),element:o}}return(o=e.closest(".point[data-id]"))?{model:n.getLink(o.getAttribute("data-linkid")).getPointModel(o.getAttribute("data-id")),element:o}:(o=e.closest("[data-linkid]"))?{model:n.getLink(o.getAttribute("data-linkid")),element:o}:(o=e.closest(".node[data-nodeid]"),o?{model:n.getNode(o.getAttribute("data-nodeid")),element:o}:null)},e.prototype.componentDidMount=function(){var t=this;this.props.diagramEngine.setCanvas(this.refs.canvas),this.setState({renderedNodes:!0,windowListener:window.addEventListener("keydown",function(e){46===e.keyCode&&(r.forEach(t.props.diagramEngine.getDiagramModel().getSelectedItems(),function(t){t.remove()}),t.forceUpdate())})}),window.focus()},e.prototype.render=function(){
var t=this,e=this.props.diagramEngine,n=e.getDiagramModel();return i.DOM.div({ref:"canvas",className:"storm-diagrams-canvas",onWheel:function(o){o.preventDefault(),o.stopPropagation(),n.setZoomLevel(n.getZoomLevel()+o.deltaY/60),e.enableRepaintEntities([]),t.forceUpdate()},onMouseMove:function(o){if(t.state.action instanceof u){var i=e.getRelativePoint(o.pageX,o.pageY);return r.forEach(n.getNodes(),function(e){t.state.action.containsElement(e.x,e.y,n)&&e.setSelected(!0)}),r.forEach(n.getLinks(),function(e){var o=!0;r.forEach(e.points,function(e){t.state.action.containsElement(e.x,e.y,n)?e.setSelected(!0):o=!1}),o&&e.setSelected(!0)}),t.state.action.mouseX2=i.x,t.state.action.mouseY2=i.y,void t.setState({action:t.state.action})}t.state.action instanceof l?(r.forEach(t.state.action.selectionModels,function(e){(e.model instanceof s.NodeModel||e.model instanceof s.PointModel)&&(e.model.x=e.initialX+(o.pageX-t.state.action.mouseX)/(n.getZoomLevel()/100),e.model.y=e.initialY+(o.pageY-t.state.action.mouseY)/(n.getZoomLevel()/100))}),t.forceUpdate()):t.state.action instanceof d&&(n.setOffset(t.state.action.initialOffsetX+(o.pageX-t.state.action.mouseX)/(n.getZoomLevel()/100),t.state.action.initialOffsetY+(o.pageY-t.state.action.mouseY)/(n.getZoomLevel()/100)),t.forceUpdate())},onMouseDown:function(o){e.clearRepaintEntities();var i=t.getMouseElement(o);if(null===i)if(o.shiftKey){var r=e.getRelativePoint(o.pageX,o.pageY);t.setState({action:new u(r.x,r.y)})}else{var r=e.getRelativePoint(o.pageX,o.pageY);n.clearSelection(),t.setState({action:new d(r.x,r.y,n)})}else if(i.model instanceof s.PortModel){var r=e.getRelativeMousePoint(o),a=new s.LinkModel;a.setSourcePort(i.model),a.getFirstPoint().updateLocation(r),a.getLastPoint().updateLocation(r),n.clearSelection(),a.getLastPoint().setSelected(!0),n.addLink(a),t.setState({action:new l(o.pageX,o.pageY,e)})}else o.shiftKey||i.model.isSelected()||n.clearSelection(),i.model.setSelected(!0),t.setState({action:new l(o.pageX,o.pageY,e)})},onMouseUp:function(n){if(t.state.action instanceof l){var o=t.getMouseElement(n);o&&r.forEach(t.state.action.selectionModels,function(t){t.model instanceof s.PointModel&&o.model instanceof s.PortModel&&t.model.getLink().setTargetPort(o.model)})}e.clearRepaintEntities(),t.setState({action:null})}},this.state.renderedNodes?i.createElement(a.LinkLayerWidget,{diagramEngine:e,pointAdded:function(o,i){i.stopPropagation(),n.clearSelection(o),t.setState({action:new l(i.pageX,i.pageY,e)})}}):null,i.createElement(c.NodeLayerWidget,{diagramEngine:e}),this.state.action instanceof u?i.DOM.div({className:"selector",style:{top:this.state.action.mouseY,left:this.state.action.mouseX,width:this.state.action.mouseX2-this.state.action.mouseX,height:this.state.action.mouseY2-this.state.action.mouseY}}):null)},e}(i.Component);e.DiagramWidget=f},function(t,e,n){"use strict";var o=n(15),i=n(0),r=n(16);n(14),window.onload=function(){var t=new o.DiagramEngine;t.registerNodeFactory(new o.DefaultNodeFactory),t.registerLinkFactory(new o.DefaultLinkFactory);var e=new o.DiagramModel,n=new o.DefaultNodeModel("Node 1","rgb(0,192,255)"),s=n.addPort(new o.DefaultPortModel(!1,"out-1","Out"));n.x=100,n.y=100;var a=new o.DefaultNodeModel("Node 2","rgb(192,255,0)"),c=a.addPort(new o.DefaultPortModel(!0,"in-1","IN"));a.x=400,a.y=100;var p=new o.LinkModel;p.setSourcePort(s),p.setTargetPort(c),e.addNode(n),e.addNode(a),e.addLink(p),t.setDiagramModel(e),r.render(i.createElement(o.DiagramWidget,{diagramEngine:t}),document.body)}}])});
//# sourceMappingURL=bundle.js.map