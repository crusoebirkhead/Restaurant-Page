(() => {
    "use strict";
    var e = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        t = {};
    e(t);
    var n = {};
    e(n), window.addEventListener("load", (e => {
        const d = document.createElement("div");
        document.body.appendChild(d), d.id = "navbar";
        const a = document.createElement("h1");
        d.appendChild(a), a.id = "title", a.innerHTML = "MK's Sushi";
        const o = document.createElement("button"),
            c = document.createElement("button"),
            i = document.createElement("button");
        o.id = "btn-home", c.id = "btn-menu", i.id = "btn-reservation", o.innerHTML = "Home", c.innerHTML = "Menu", i.innerHTML = "Reservations", d.appendChild(o), d.appendChild(c), d.appendChild(i);
        const m = document.createElement("div");
        document.body.append(m);
        const r = document.createElement("div");
        r.id = "home", m.appendChild(r);
        const l = document.createElement("h1");
        l.textContent += "Artisan omakase, made fresh", r.appendChild(l);
        const p = document.createElement("h2");
        p.textContent += "Hand crafted by master chefs", r.appendChild(p);
        const u = document.createElement("footer"),
            h = document.createElement("h2");
        h.textContent += "sushi@gmail.com | 264.569.4315 | 321 Market St. San Francisco, CA 94901", document.body.appendChild(u), u.appendChild(h), o.addEventListener("click", (e => {
            m.innerHTML = "";
            const t = document.createElement("div");
            t.id = "home", m.appendChild(t);
            const n = document.createElement("h1");
            n.textContent += "Artisan omakase, made fresh", t.appendChild(n);
            const a = document.createElement("h2");
            a.textContent += "Hand crafted by master chefs", t.appendChild(a)
        })), c.addEventListener("click", n.default, !1), i.addEventListener("click", t.default, !1)
    }))
})();