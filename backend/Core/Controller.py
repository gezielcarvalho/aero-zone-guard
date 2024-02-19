from Core.View import View


class Controller:

    def __init__(self, model):
        self.model = model

    @staticmethod
    def health_check():
        return View.render({"status": "OK"})
