from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from config import db, bcrypt
from sqlalchemy.orm import relationship
from sqlalchemy import ForeignKey, Table, Float, DateTime, String, Integer, Column
from datetime import datetime


class User(db.Model,  SerializerMixin):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    avatar = Column(String, unique=True, nullable=False)
    photo = Column(String, unique=True, nullable=False)
    age = Column(Integer, nullable=False)
    password_hash = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    isadmin = Column(Integer, default=0)
    


  

    
    @validates('email')
    def validate_email(self, key, address):
        assert '@' in address
        return address

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'lastname': self.lastname,
            'username': self.username,
            'email': self.email,
            'avatar': self.avatar,
            'photo': self.photo,
            'age': self.age,
        }

    def __repr__(self):
        return f"<User(id={self.id}, username={self.username}, email={self.email})>"







