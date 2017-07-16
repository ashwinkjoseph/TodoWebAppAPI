class Login {
	private loginModel: any;
	constructor(model: any) {
		this.loginModel = model;
	}
	public getReq(req: any, res: any, next: any) {
		res.send("hey");
	}
	public validate(req: any, res: any, next: any) {
		// logic
	}
	public getReqSignUp(req: any, res: any, next: any) {
		// logic
	}
	public signup(req: any, res: any, next: any) {
		// logic
	}
}

module.exports = function(model: any){
	return new Login(model);
};