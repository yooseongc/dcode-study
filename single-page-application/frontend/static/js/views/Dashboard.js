
import AbstractView from './AbstractView.js';

export default class extends AbstractView {

    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas optio assumenda? Ratione delectus minus iusto voluptatum dicta officia incidunt nostrum, dolorum repellendus libero dignissimos est, assumenda, perferendis corporis voluptas.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }

}
