#!/usr/bin/env python3

from flask import Flask, request, jsonify, session
from flask_restful import Resource, Api
from flask_cors import cross_origin
import os
from dotenv import load_dotenv
from datetime import timedelta
from config import app, db
from models import User

load_dotenv()
app.secret_key = os.getenv("SECRET_KEY")
app.permanent_session_lifetime = timedelta(days=7)

api = Api(app)

class RegisterUser(Resource):
    @cross_origin()
    def post(self):
        user_details = request.json
        user = User.query.filter_by(email=user_details['email']).first()
        if user:
            return jsonify({"message": "User already exists!"}), 400
        new_user = User(username=user_details['username'], email=user_details['email'])
        new_user.set_password(user_details['password'])
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.to_dict()), 201

class LoginUser(Resource):
    @cross_origin()
    def post(self):
        user_details = request.json
        user = User.query.filter_by(email=user_details['email']).first()
        if not user or not user.check_password(user_details['password']):
            return jsonify({"message": "Invalid email or password!"}), 400
        session['user_id'] = user.id
        return jsonify(user.to_dict()), 200

class LogoutUser(Resource):
    def get(self):
        session.pop('user_id', None)
        return jsonify({'message': 'Logged out successfully'}), 200

api.add_resource(RegisterUser, '/register')
api.add_resource(LoginUser, '/login')
api.add_resource(LogoutUser, '/logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)


