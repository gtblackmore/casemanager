class AttorneySerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email
  has_many :matters
end
