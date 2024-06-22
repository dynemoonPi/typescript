var ListTamplet = /** @class */ (function () {
    function ListTamplet(Container) {
        this.Container = Container;
    }
    ListTamplet.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.Container.append(li);
        }
        else {
            this.Container.append(li);
        }
    };
    return ListTamplet;
}());
export { ListTamplet };
