const store = [];

const getDimension = (el) => {
    const { width, height } = el.getBoundingClientRect();

    return { width, height };
};

const isResized = ({ dimension }, newDimension) =>
    Object.keys(dimension).some(prop => dimension[prop] !== newDimension[prop]);

const isSubscribed = el => !!store.filter(record => record.el === el).length;

export const unsubscribe = el => {
    if (!isSubscribed(el)) return;

    const index = store.findIndex(record => record.el === el);

    store.splice(index, 1);
};

export const subscribe = el => {
    const unsubscriber = () => unsubscribe(el);

    if (isSubscribed(el)) return unsubscriber;

    const dimension = getDimension(el);

    store.push({
        el,
        dimension
    });

    return unsubscriber;
};

(function run() {
    store.forEach(record => {
        const dimension = getDimension(record.el);

        if (isResized(record, dimension)) {
            record.dimension = dimension;
            record.el.dispatchEvent(new Event("resize"));
        }
    });

    requestAnimationFrame(run);
})();


export default subscribe;