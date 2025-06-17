import Statement from '../models/Statement.js';

// Create new statement
export const createStatement = async (req, res) => {
  try {
    const newStatement = new Statement(req.body);
    const savedStatement = await newStatement.save();
    res.status(201).json(savedStatement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all statements
export const getStatements = async (req, res) => {
  try {
    const statements = await Statement.find().sort({ createdAt: -1 });
    res.json(statements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single statement
export const getStatementById = async (req, res) => {
  try {
    const statement = await Statement.findById(req.params.id);
    if (!statement) {
      return res.status(404).json({ message: 'Statement not found' });
    }
    res.json(statement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update statement
export const updateStatement = async (req, res) => {
  try {
    const updatedStatement = await Statement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStatement) {
      return res.status(404).json({ message: 'Statement not found' });
    }
    res.json(updatedStatement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete statement
export const deleteStatement = async (req, res) => {
  try {
    const deletedStatement = await Statement.findByIdAndDelete(req.params.id);
    if (!deletedStatement) {
      return res.status(404).json({ message: 'Statement not found' });
    }
    res.json({ message: 'Statement removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};