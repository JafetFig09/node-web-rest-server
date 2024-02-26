import express, { Router } from 'express';
import path from 'path';

interface Options {
    port: number;
    routes: Router;
    public_path?: string;

}


//?Configurar servidor de express
export class Server {

    private app = express();
    private readonly port: number;
    private readonly public_path: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes, public_path } = options;
        this.port = port;
        this.routes = routes;
        this.public_path = public_path || 'public';
    }


    async start() {

        //*Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        //*Public folder
        this.app.use(express.static(this.public_path));


        //*Routes
        this.app.use(this.routes);

        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname, `../../${this.public_path}/index.html`);
            res.sendFile(indexPath);
            return;
        })

        this.app.listen(this.port, () => {
            console.log(`server running on port ${this.port}`);
        });
    }

}